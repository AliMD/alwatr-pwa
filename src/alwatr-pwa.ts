import {router} from '@alwatr/router';
import {css, html, nothing} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';
import {state} from 'lit/decorators/state.js';

import {AlwatrElement} from './alwatr-debt/alwatr-element';
import './elements/page-home';
import './elements/page-article-list';
import './elements/page-article-detail';
import './elements/page-bookmarks';
import './elements/page-search';
import {mainTabBar} from './config';

import type {RoutesConfig} from '@alwatr/router';
import type {ListenerInterface} from '@alwatr/signal';
import type {TemplateResult} from 'lit';


declare global {
  interface HTMLElementTagNameMap {
    'alwatr-pwa': AlwatrPwa;
  }
}

/**
 * Alwatr PWA Root Element
 *
 * ```html
 * <alwatr-pwa></alwatr-pwa>
 * ```
 */
@customElement('alwatr-pwa')
export class AlwatrPwa extends AlwatrElement {
  // TODO: import pageStyle
  // TODO: rethink about `contain` in all elements https://developers.google.com/web/updates/2016/06/css-containment
  static override styles = css`
    :host {
      inset: 0;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      position: absolute;
      flex-direction: column;
      justify-content: space-between;
      contain: layout size style;
      overflow: hidden;
      z-index: 0
    }

    .page-container {
      position: relative;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0%;
      contain: size layout style;
    }

    ion-tab-bar {
      height: 56px;
    }

    ion-tab-button {
      letter-spacing: 0;
      font-size: 12px;
      font-weight: 400;
    }

    ion-tab-button ion-icon {
      font-size: 22px;
    }

    page-home,
    page-article-list,
    page-article-detail,
    page-bookmarks,
    page-search {
      inset: 0;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      position: absolute;
      flex-direction: column;
      justify-content: space-between;
      contain: layout size style;
      overflow: hidden;
      z-index: 0;
    }

    /* This will be displayed only on lazy loading. */
    [unresolved]::after {
      content: '...';
      display: block;
      font-size: 2em;
      padding-top: 30vh;
      letter-spacing: 3px;
      text-align: center;
    }
  `;

  @state()
  protected _hideTabBar = false;

  constructor() {
    super();
    router.initial();
  }

  protected _activePage = 'home';

  protected _routes: RoutesConfig = {
    // TODO: refactor route, we need to get active page!
    // TODO: ability to redirect!
    map: (route) => this._activePage = route.sectionList[0]?.toString().trim() || 'home',
    list: {
      'home': {
        render: () => html`<page-home></page-home>`,
      },
      'beliefs': {
        render: () => html`<page-article-list type="card"></page-article-list>`,
      },
      'articles': {
        render: () => html`<page-article-list type="mini-card"></page-article-list>`,
      },
      'bookmarks': {
        render: () => html`<page-bookmarks></page-bookmarks>`,
      },
      'article': {
        render: (route) => html`
          <page-article-detail article-id=${route.sectionList[1]}></page-article-detail>
        `,
      },
      'search': {
        render: () => html`<page-search article-id="1"></page-search>`,
      },
    },
  };

  protected _listenerList: Array<unknown> = [];

  override connectedCallback(): void {
    super.connectedCallback();
    this._listenerList.push(router.signal.addListener((route) => {
      this._logger.logMethodArgs('routeChanged', {route});
      this._hideTabBar = (route.sectionList[0] === 'article');
      this.requestUpdate();
    }, {receivePrevious: true}));
    // TODO: make `hide-tab-bar` signal and bind to this._hideTabBar
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._listenerList.forEach((listener) => (listener as ListenerInterface<keyof AlwatrSignals>).remove());
  }

  override render(): TemplateResult {
    return html`
      <div class="page-container">
        ${router.outlet(this._routes)}
      </div>
      ${this._renderTabBar()}
    `;
  }

  protected _renderTabBar(): TemplateResult | typeof nothing {
    if (this._hideTabBar) return nothing;

    const listTemplate = mainTabBar.map((item) => {
      const selected = this._activePage === item.id;
      return html`
        <ion-tab-button
          layout="icon-top"
          href=${router.makeUrl({sectionList: [item.id]})}
          ?selected=${selected}
        >
          <ion-label>${item.title}</ion-label>
          <ion-icon name=${selected ? item.icon : item.icon + '-outline'}></ion-icon>
        </ion-tab-button>
      `;
    });

    return html`<ion-tab-bar>${listTemplate}</ion-tab-bar>`;
  }
}
