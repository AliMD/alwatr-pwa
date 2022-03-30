import {router} from '@alwatr/router';
import {css, html, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';
import {property} from 'lit/decorators/property.js';
import {state} from 'lit/decorators/state.js';
import {live} from 'lit/directives/live.js';
import {repeat} from 'lit/directives/repeat.js';

import {AlwatrElement} from '../alwatr-debt/alwatr-element';
import {sampleDataList} from '../config';

import type {ListenerInterface} from '@alwatr/signal';
import type {TemplateResult} from 'lit';


declare global {
  interface HTMLElementTagNameMap {
    'page-bookmarks': PageBookmarks;
  }
}

interface SearchbarChangeEventDetail {
  value?: string;
}

/**
 * Alwatr PWA Bookmarks Page Element
 *
 * ```html
 * <page-bookmarks></page-bookmarks>
 * ```
 */
@customElement('page-bookmarks')
export class PageBookmarks extends AlwatrElement {
  static override styles: CSSResultGroup = css`
    :host {
      display: flex;
      flex-direction: column;
      --gap: 16px;
    }

    ion-content {
      --padding-start: 8px;
      --padding-end: 8px;
    }

    input[type=search]::-webkit-search-cancel-button,
    input[type=search]::-webkit-search-decoration {
      -webkit-appearance: none
    }

    ion-toolbar {
      --padding-bottom: 0;
    }

    .toolbar-searchbar {
      padding: 8px 12px;
    }

    .toolbar-searchbar ion-searchbar {
      padding: 0 !important;
    }

    ion-segment-button {
      letter-spacing: 0;
    }

    ion-item {
      --inner-padding-end: 0;
    }

    button.remove {
      display: flex;
      align-items: center;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background: inherit;
      border: 0;
      padding: 0;
      margin: 0;
      /* outline: 1px solid blue; */
      padding: 22px 15px;
      font-size: 1.4em;
      color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);
    }
  `;

  @property({type: String})
    type: 'minimal' | 'card' | 'mini-card' = 'minimal';

  @state()
  protected _search = '';

  @state()
  protected _list = [...sampleDataList];

  protected _listenerList: Array<unknown> = [];

  override connectedCallback(): void {
    super.connectedCallback();
    // this._listenerList.push(router.signal.addListener(() => this.requestUpdate()));
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._listenerList.forEach((listener) => (listener as ListenerInterface<keyof AlwatrSignals>).remove());
  }

  protected override render(): TemplateResult {
    return html`
      <ion-header translucent dir="rtl">
        <ion-toolbar>
          <ion-segment value="bookmarks" mode="md">
            <ion-segment-button value="bookmarks">
              <ion-label>نشانک‌ها</ion-label>
            </ion-segment-button>
            <ion-segment-button value="history">
              <ion-label>تاریخچه</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-toolbar>
        <ion-toolbar>
          <ion-searchbar
              autocomplete="on"
              placeholder="جستجو ..."
              .value=${live(this._search)}
              @ionChange=${this._onSearch}
            ></ion-searchbar>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen dir="rtl">
        ${this._renderList()}
      </ion-content>
    `;
  }

  protected _onSearch(event: CustomEvent<SearchbarChangeEventDetail>): void {
    const value = event.detail.value;
    this._logger.logMethodArgs('_onSearch', {value});
    this._search = value ?? '';
  }

  protected _renderList(): unknown {
    const list = this._search?.length > 0 ?
      this._list.filter((item) => (item.title + item.description).indexOf(this._search) !== -1) :
      this._list;

    return html`
      <ion-list lines="inset">
        ${repeat(list, (item) => item.id, (item, index) => html`
          <ion-item detail="false" href=${router.makeUrl({sectionList: ['article', item.id]})}>
            <ion-avatar slot="start">
              <img src="${item.image}"/>
            </ion-avatar>
            <ion-label>
              <h2>${item.title}</h2>
              <p>${item.description}...</p>
            </ion-label>
            <button class="remove" slot="end" @click=${this._removeItem} .index=${index}>
              <ion-icon slot="icon-only" name="close-circle-outline"></ion-icon>
            </button>
          </ion-item>
        `)}
      </ion-list>
    `;
  }

  protected _removeItem(event: PointerEvent): void {
    const target = event.currentTarget as HTMLElement & {index: number};
    const index = target.index;
    this._logger.logMethodArgs('_removeItem', {index});
    // @TODO: check index is valid number;
    event.preventDefault();
    this._list.splice(index, 1);
    this.requestUpdate('_list');
  }
}
