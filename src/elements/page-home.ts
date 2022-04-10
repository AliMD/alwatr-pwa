import {router} from '@alwatr/router';
import {css, html} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';

import {AlwatrElement} from '../alwatr-debt/alwatr-element';

import type {ListenerInterface} from '@alwatr/signal';
import type {TemplateResult} from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'page-home': PageHome;
  }
}

/**
 * Alwatr PWA Home Page Element
 *
 * ```html
 * <page-home></page-home>
 * ```
 */
@customElement('page-home')
export class PageHome extends AlwatrElement {
  // TODO: import pageStyle
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      --page-padding: 16px;
      --item-gap: 12px;
    }

    ion-content {
      --padding-start: var(--page-padding);
      --padding-end: var(--page-padding);
      --padding-top: var(--page-padding);
      --padding-bottom: var(--page-padding);
    }

    .menu-container {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: var(--item-gap);
    }

    .card-image {
      display: flex;
      text-decoration: none;
      justify-content: flex-start;
      align-items: flex-start;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      height: 35vw;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
    }

    .card-image h2 {
      color: white;
      font-weight: 400;
      margin: auto;
      padding: 0.3em 1.2em;
      border-radius: 6px;
      font-size: 20px;
    }

    .card-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .card-group .card-image {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 40%;
    }

    .card-group .card-image h2 {
      font-size: 16px;
    }

    .card-image.about-him {
      background-image: url('/images/1005.jpeg');
      height: 30vw;
    }
    .card-image.about-him h2 {
      font-size: 19px;
      background-color: rgba(160, 122, 75, 0.9);
    }

    .card-image.beliefs {
      height: 50vw;
      background-image: url('/images/1014.jpeg');
    }
    .card-image.beliefs h2 {
      background-color: rgba(122, 174, 185, 0.9);
    }

    .card-image.imamology {
      height: 40vw;
      background-image: url('/images/1059.jpeg');
    }
    .card-image.imamology h2 {
      background-color: rgba(166, 138, 121, 0.9);
    }

    .card-image.conclusion {
      background-image: url('/images/1020.jpeg');
    }
    .card-image.conclusion h2 {
      background-color: rgba(219, 121, 63, 0.9);
    }

    .card-image.articles {
      background-image: url('/images/1010.jpeg');
    }
    .card-image.articles h2 {
      background-color: rgba(86, 34, 23, 0.9);
    }

    .card-image.contact {
      background-image: url('/images/1000.jpeg');
    }
    .card-image.contact h2 {
      background-color: rgba(6, 126, 147, 0.9);
    }

    @supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))) {
      .card-image h2 {
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
      }

      .card-image.about-him h2 {
        background-color: rgba(160, 122, 75, 0.5);
      }

      .card-image.beliefs h2 {
        background-color: rgba(122, 174, 185, 0.5);
      }

      .card-image.imamology h2 {
        background-color: rgba(166, 138, 121, 0.5);
      }

      .card-image.conclusion h2 {
        background-color: rgba(219, 121, 63, 0.5);
      }

      .card-image.articles h2 {
        background-color: rgba(86, 34, 23, 0.5);
      }

      .card-image.contact h2 {
        background-color: rgba(6, 126, 147, 0.5);
      }
    }
  `;

  protected _listenerList: Array<unknown> = [];

  override connectedCallback(): void {
    super.connectedCallback();
    // this._listenerList.push(router.signal.addListener(() => this.requestUpdate()));
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._listenerList.forEach((listener) => (listener as ListenerInterface<keyof AlwatrSignals>).remove());
  }

  override render(): TemplateResult {
    return html`
      <ion-header translucent dir="rtl">
        <ion-toolbar>
          <ion-title>بررسی جریان احمد بصری</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <div class="menu-container">
          <a class="card-image about-him" href=${router.makeUrl({sectionList: ['article', 0]})}>
            <h2>احمد اسماعیل بصری کیست؟</h2>
          </a>
          <a class="card-image beliefs" href=${router.makeUrl({sectionList: ['beliefs']})}>
            <h2>باورها و اعتقادات</h2>
          </a>
          <a class="card-image imamology" href=${router.makeUrl({sectionList: ['beliefs']})}>
            <h2>راه‌های شناخت حجت خدا</h2>
          </a>
          <a class="card-image conclusion" href=${router.makeUrl({sectionList: ['articles']})}>
            <h2>جمع‌بندی</h2>
          </a>
          <div class="card-group">
            <a class="card-image articles" href=${router.makeUrl({sectionList: ['articles']})}>
              <h2>مقالات</h2>
            </a>
            <a class="card-image contact" href=${router.makeUrl({sectionList: ['articles']})}>
              <h2>ارتباط با ما</h2>
            </a>
          </div>
        </div>
      </ion-content>
    `;
  }
}
