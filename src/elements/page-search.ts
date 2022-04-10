import {router} from '@alwatr/router';
import {css, html, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';
import {state} from 'lit/decorators/state.js';
import {live} from 'lit/directives/live.js';
import {repeat} from 'lit/directives/repeat.js';

import {AlwatrElement} from '../alwatr-debt/alwatr-element';
import {sampleDataList} from '../config';

import type {ListenerInterface} from '@alwatr/signal';
import type {TemplateResult} from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'page-search': PageSearch;
  }
}

interface SearchbarChangeEventDetail {
  value?: string;
}

/**
 * Alwatr PWA Home Page Element
 *
 * ```html
 * <page-search></page-search>
 * ```
 */
@customElement('page-search')
export class PageSearch extends AlwatrElement {
  static override styles: CSSResultGroup = css`
    :host {
      display: flex;
      flex-direction: column;
    }

    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }
  `;

  @state()
  protected _search = '';

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
          <ion-title>جستجو در تمامی مطالب</ion-title>
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
    const list =
      this._search?.length > 0 ?
        sampleDataList.filter((item) => (item.title + item.description).indexOf(this._search) !== -1) :
        [];

    return html`
      <ion-list lines="inset">
        ${repeat(list, (item) => item.id, (item) => html`
          <ion-item detail href=${router.makeUrl({sectionList: ['article', item.id]})}>
            <ion-avatar slot="start">
              <img src="${item.image}"/>
            </ion-avatar>
            <ion-label>
              <h2>${item.title}</h2>
              <p>${item.description}...</p>
            </ion-label>
          </ion-item>
        `)}
      </ion-list>
    `;
  }
}
