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
      --item-gap: 12px
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
      width: 100%;
      height: 35vw;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 12%) 0px 4px 16px;
    }

    .card-image h2 {
      color: white;
      font-weight: 400;
      margin: auto;
      padding: 0 14px;
      border-radius: 8px;
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
  `;

  private _listenerList: Array<unknown> = [];

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
      <ion-header dir="rtl">
        <ion-toolbar>
          <ion-title>احمد الحسن بصری (الیمانی)</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <div class="menu-container">
          <a
            class="card-image"
            href=${router.makeUrl({sectionList: ['about-him']})}
            style="background-image: url('/images/1005.jpeg'); height: 30vw;">
            <h2 style="background-color: rgba(160, 122, 75, 90%);">احمد بصری کیست؟</h2>
          </a>
          <a
            class="card-image"
            href=${router.makeUrl({sectionList: ['beliefs']})}
            style="background-image: url('/images/1014.jpeg'); height: 50vw;">
            <h2 style="background-color: rgba(122, 174, 185, 90%);">باورها و اعتقادات</h2>
          </a>
          <a
            class="card-image"
            href=${router.makeUrl({sectionList: ['articles']})}
            style="background-image: url('/images/1010.jpeg');">
            <h2 style="background-color: rgba(60, 78, 83, 90%);">مقالات</h2>
          </a>
          <div class="card-group">
            <a
              class="card-image"
              href=${router.makeUrl({sectionList: ['articles']})}
              style="background-image: url('/images/1078.jpeg');">
              <h2 style="background-color: rgba(69, 50, 83, 0.9);">ویدیوها</h2>
            </a>
            <a
              class="card-image"
              href=${router.makeUrl({sectionList: ['articles']})}
              style="background-image: url('/images/1059.jpeg');">
              <h2 style="background-color: rgba(166, 138, 121, 90%);">پادکست</h2>
            </a>
          </div>
          <a
            class="card-image"
            href=${router.makeUrl({sectionList: ['bookmarks']})}
            style="background-image: url('/images/1025.jpeg');">
            <h2 style="background-color: rgba(171, 185, 80, 90%);">عنوان نمونه</h2>
          </a>
          <div class="card-group">
            <a
              class="card-image"
              href=${router.makeUrl({sectionList: ['articles']})}
              style="background-image: url('/images/1071.jpeg');">
              <h2 style="background-color: rgba(28, 117, 120, 0.9);">وب‌سایت‌ها</h2>
            </a>
            <a
              class="card-image"
              href=${router.makeUrl({sectionList: ['articles']})}
              style="background-image: url('/images/1067.jpeg');">
              <h2 style="background-color: rgba(176, 134, 105, 0.9);">شبکه‌های اجتماعی</h2>
            </a>
          </div>
        </div>
      </ion-content>
    `;
  }
}
