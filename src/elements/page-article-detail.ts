import {css, html, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';

import {AlwatrElement} from '../alwatr-debt/alwatr-element';

import type {ListenerInterface} from '@alwatr/signal';
import type {TemplateResult} from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'page-article-detail': PageArticleDetail;
  }
}

/**
 * Alwatr PWA Home Page Element
 *
 * ```html
 * <page-article-detail></page-article-detail>
 * ```
 */
@customElement('page-article-detail')
export class PageArticleDetail extends AlwatrElement {
  static override styles: CSSResultGroup = css`
    :host {
      display: flex;
      flex-direction: column;
    }

    ion-card {
      margin: 16px;
    }

    ion-card-title {
      font-size: 22px;
      font-weight: 500;
    }

    img {
      max-width: 100%;
      border: 0;
    }

    ion-card-content {
      line-height: 22px;
    }

    p {
      font-size: inherit !important;
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

  protected override render(): TemplateResult {
    return html`
      <ion-header translucent dir="rtl">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/" text=""></ion-back-button>
          </ion-buttons>
          <ion-title>بررسی ادعای اول</ion-title>
          <ion-progress-bar value="0.1" dir="ltr"></ion-progress-bar>
        </ion-toolbar>
      </ion-header>

      <ion-footer translucent dir="rtl">
        <ion-toolbar>
          <ion-buttons slot="primary">
            <ion-icon slot="icon-only" name="play"></ion-back-button>
          </ion-buttons>
          <ion-title>پادکست صوتی این مطلب</ion-title>
          <ion-progress-bar value="0.4" dir="ltr"></ion-progress-bar>
        </ion-toolbar>
      </ion-footer>

      <ion-content fullscreen dir="rtl">
        <ion-card>
          <img src="/images/1014.jpeg" />
          <ion-card-header>
            <ion-card-subtitle>بررسی حجت بودن خواب در شناخت امام</ion-card-subtitle>
            <ion-card-title>تمسک به رؤیا و استخاره برای اثبات ادعاها</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            احمد بصری «خواب» را به عنوان یکی از شهادت‌ های پروردگار دانسته و آن را حجت قطعی برای اثبات ادعاهای خود در وصایت، نیابت و سفارت امام زمان(عج) معرفی کرده است! همچنین او ادعا می‌ کند که هر کسی با نیت حقانیت من «استخاره» کند، قرآن کریم سخن مرا تایید خواهد کرد! در این مقاله وزانت و اعتبار ادعاهای او، همچنین اعتبار رویا و استخاره در قبول چنین ادعاهایی بررسی می شود.
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>توضیحات و مستندات</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>احمد بصری</strong> خواب را به عنوان یکی از شهادت‌ های پروردگار دانسته و آن را حجت قطعی برای اثبات خود معرفی کرده است.(1) وی علاوه بر آن، اولین آشنایی خود با حضرت مهدی(علیه السلام) را در قالب خواب تعریف کرده و می ‌گوید:</p>
            <p>
              «وَ قِصَّةُ هَذَا اللِّقَاءِ هِیَ إِنِّی کُنْتُ فِی لَیْلَةٍ مِنَ اللَّیَالِی نَائِماً فَرَأَیْتُ رُؤْیَا فِی الْمَنَامِ کَأَنَّ الْإِمَامُ الْمَهْدِیِّ وَاقِفٌ بِالْقُرْبِ مِنْ ضَرِیحِ سَیِّدُ مُحَمَّدِ أَخُو الْإِمَامِ الْعَسْکَرِیُّ وَأَمَرَنِی بِالْحُضُورِ لِلِقَائِهِ وَ بَعْدَ ذَلِکَ اسْتَیْقَظْتَ وَکَانَتْ السَّاعَةِ الثَّانِیَةِ لَیْلًا»(2)؛
              <br />
              (لازم می بینم که ماجرای دیدار خودم را ولو به اختصار تعریف کنم... ماجرای دیدار این است که من شبی از شبها در خواب بودم که رؤیایی در آن خواب دیدم؛ گویی که امام مهدی کنار درب نزدیک به ضریح سید محمد برادر امام حسن عسکری ایستاده بود و به من امر می کرد که به دیدارش بروم. بعد از آن از خواب بیدار شدم و ساعت هم دو نصف شب بود)!
            </p>
            <img src="/images/refrence1.jpeg" />
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>خلاصه بررسی</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>۱. <strong>لازمه دیدار</strong> معصوم(علیه السلام) در خواب، این است که او را در عالم بیداری دیده و تصویرشان را بشناسیم و گرنه چگونه می ‌توان گفت: آن کسی را که در خواب دیده‌ایم همان معصوم است؟<(11)</p>
            <p>۲. آخه کدوم احمقی میاد از طریق خواب اعتقاداتش رو ثابت کنه؟!</p>
            <p>۳. واقعا شیطان نمیتونه به خواب منو شما بیاد؟! مگه ما پیامبر و حجت خدا هستیم؟</p>
            <p>۴. وقتی به دختر همسایه خیلی فکر میکنی ممکنه خوبش رو ببینی! این یعنی بهش محرم شدی و باید در بیداری هم بری ترتیبش رو بدی؟!</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>بررسی حقیقت رویا</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>«رؤیا» از ماده «رَأی» به معنای دیدن در خواب است(8)، که بر اساس آیات و روایات دارای دو قسم کلی می ‌باشد:</p>
            <p><strong>1. خواب فاقد تعبیر،</strong> که اضغاث احلام یا رؤیاهای کاذبه نامیده می ‌شود. این رؤیاها که نتیجه عوامل گوناگونی همچون؛</p>
            <p><strong>الف:</strong> ممکن است بر اثر پُرخوری، پُرخوابی و بیماری ‌های روحی و جسمی رؤیا دیده شود.</p>
            <p><strong>ب:</strong> شاید آنچه برای انسان در روزهای گذشته روی داده به هنگام خواب در مقابل فکرش مجسم گردد. لذا ممکن است نام فردی خاص که فکرش را مشغول کرده یا داستانی که اخیرا مشغول خواندن آن شده است را ببیند.</p>
            <p><strong>ج:</strong> ممکن است آرزوهای بر آورده نشده باعث رؤیا شود. همان طور که شخصی تشنه، آب در خواب می ‌بیند و کسی که در انتظار سفرکرده‌ای است، آمدن او را از سفر در خواب می بیند.</p>
            <p><strong>د: </strong>ممکن است ترس از چیزی باعث شود که انسان خواب آن را ببیند.</p>
            <p><strong>2. خواب دارای تعبیر،</strong> که خود بر دو گونه است:</p>
            <p><strong>الف):</strong> خوابی که تعبیری غیر از صورت خواب ندارد.</p>
            <p><strong>ب): </strong>خوابی که دارای تعبیر است و رؤیای صادقه نامیده می‌ شود. در این گونه رؤیاها مستقیماً، یا پس از تأویل و تعبیر و با استفاده از رموز، می ‌توان مطلبی را کشف نمود. در روایات، این رؤیا ها به عنوان نتیجه ملاقات روح با ملائک معرفی شده‌ اند.(9)</p>
            <p><strong>با توجه به گزارشاتی</strong> که در خصوص رؤیای احمد بصری به دست آمده است، این رؤیا ها، تنها برای کسانی اتفاق افتاده است که با نام و جریان او آشنا بوده و مدتی با آن درگیر هستند و حتی در این میان یک نمونه گزارش نشده که شخصی بدون اطلاع قبلی از نام و جریان و دل مشغولی ‌های ایجاد شده در این خصوص، خواب احمد بصری را دیده باشد. لذا بر اساس تقسیم بندی رؤیا، این نوع از رؤیاها در گروه رؤیای کاذبه قرار گرفته و قابل تعبیر نمی ‌باشند. گذشته از آن، گزارشات متعددی هم بوده است که ناحق بودن احمد بصری را در خواب دیده و از پیوستن به وی نهی گردیده ‌اند.</p>
            <p><strong>اما</strong> در خصوص رؤیاهای صادقه که برخی بر این باورند که احمد بصری را در رؤیای صادقه دیده ‌اند، باید گفت؛ حتی در صورتی که فردی وی را در رؤیای صادقه دیده باشد- که البته تشخیص رؤیای صادقه به عهده کسانی است که از جانب خداوند به علم تعبیر آگاهی دارند- بازهم برای آن فرد تکلیف ساز نخواهد بود، بنابراین، نهایت چیزی که می ‌توان برای رؤیای صادقه قائل شد، مبشرات و عتاب‌هایی است که در خواب حاصل می ‌شود، که البته هیچ کدام شأنیت معرفی وصی حضرت رسول اکرم(صل الله علیه و آله) و تعیین تکلیف شرعی را ندارند.</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>بررسی روایت من رآنی فی المنام</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>برخی از اتباع احمد بصری ادعا می ‌کنند که ائمه معصومین(علیهم السلام) را در رؤیا دیده‌اند که به حقانیت احمد بصری شهادت داده ‌اند. لذا برای اثبات حجیت سخن خود به روایتی از پیامبر(صل الله علیه و آله) استناد کنند که فرمود:</p>
            <p><span class="hadith">«مَنْ رَآنِی فِی الْمَنَامِ فَقَدْ رَآنِی فَإِنَّ الشَّیْطَانَ لَا یَتَمَثَّلُ‌ بِی‌ فِی نَوْمٍ وَ لَا یَقَظَةٍ وَ لَا بِأَحَدٍ مِنْ أَوْصِیَائِی إِلَى یَوْمِ الْقِیَامَة»</span>(10)؛ (کسی که مرا در خواب دید، به درستی که مرا دیده است. زیرا شیاطین به صورت من در خواب و بیداری مجسّم نمی ‌شوند. حتی به صورت اوصیاء من نیز تا روز قیامت در نمی‌ آیند).</p>
            <p>.....</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>کلام آخر</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>۱. پیروان این عقیده از نعمت عقل محروم هستند!</p>
            <p>۲. به نظر می‌رسد ایشان مارو اسکول فرموده‌اند با این ادعای خنده دارشان!</p>
            <p>۳. حتی در قرن حاضر و با این همه پیشرفت بشریت هنوز نسل تهی مغزان منقرض نشده!</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>English font test</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>This is a test paragraph with a lot of text for testing the english font!</p>
            <p>0123456789 @%$#^&*()</p>
            <p>۰۱۲۳۴۵۶۷۸۹</p>
            <p>ك ک پ ژ ی ئ &#1873;</p>
          </ion-card-content>
        </ion-card>
      </ion-content>
    `;
  }
}
