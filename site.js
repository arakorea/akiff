(() => {
  "use strict";

  const STORAGE_KEY = "akff-language";
  const supported = ["en", "ko", "ja", "zh"];
  const htmlLang = { en: "en", ko: "ko", ja: "ja", zh: "zh-CN" };
  const currentPage = document.body.dataset.page || "home";

  const translations = {
    en: {
      "skip": "Skip to content",
      "nav.screening": "Screening",
      "nav.about": "Festival",
      "nav.awards": "Awards",
      "nav.submit": "Submission",
      "nav.contact": "Contact",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "footer.organized": "Organized by ARA KOREA",
      "footer.filmfreeway": "FilmFreeway",
      "footer.copyright": "Ara Korea Film Festival. All rights reserved.",
      "footer.context": "Cinema · Performance · New Media",
      "common.festival": "Ara Korea Film Festival",
      "common.watch": "Watch film",
      "common.discover": "Discover AKFF",
      "common.submit": "Submit on FilmFreeway",
      "common.close": "Close",
      "home.kicker": "Korea · International Film Festival",
      "home.heroCopy": "A screen for singular visions, new cinematic languages, and the artists shaping what comes next.",
      "home.now": "Now presenting",
      "home.heroMeta": "DAL. HAE EYE · Experimental Art Film",
      "home.introKicker": "The festival as a living screen",
      "home.introTitle": "Cinema begins where explanation ends.",
      "home.introCopy": "AKFF brings independent films, embodied performance, sound, and new media into one focused encounter. We champion works that do not simply follow form, but create their own language.",
      "home.featureKicker": "Featured presentation · 001",
      "home.featureTitle": "DAL.<br>HAE EYE",
      "home.featureType": "Experimental Art Film · ARA KOREA",
      "home.featureCopy": "An experimental moving-image work exploring the threshold between body, sound, space, and perception.",
      "home.manifestoKicker": "AKFF in focus",
      "home.manifestoTitle": "Distinct voices.<br>One shared screen.",
      "home.manifestoCopy": "We welcome filmmakers worldwide and evaluate every work across genre, length, and format with a commitment to artistic integrity, clarity, and fairness.",
      "home.stat1Value": "Global",
      "home.stat1Label": "Worldwide submissions",
      "home.stat2Value": "Live",
      "home.stat2Label": "In-person cinema experience",
      "home.stat3Value": "04",
      "home.stat3Label": "Awards for overall excellence",
      "home.awardsKicker": "The AKFF Awards",
      "home.awardsTitle": "Four distinctions.<br>No genre walls.",
      "home.award1": "Best Film",
      "home.award2": "Best Director",
      "home.award3": "Best Performance",
      "home.award4": "Jury Special Prize",
      "home.ctaKicker": "Call for entries",
      "home.ctaTitle": "Bring your film<br>into the light.",
      "about.kicker": "01 · Festival",
      "about.title": "A screen for<br><em>new voices.</em>",
      "about.lead": "AKFF is an international, in-person film festival in Korea dedicated to discovering bold work and supporting emerging filmmakers worldwide.",
      "about.section1Kicker": "Why AKFF exists",
      "about.section1Title": "Beyond categories.<br>Toward cinema.",
      "about.section1Copy1": "Ara Korea Film Festival presents works that engage contemporary culture, identity, and evolving forms of cinematic expression.",
      "about.section1Copy2": "Rather than reducing films to format or genre, we look for originality, artistic integrity, and the clarity of a singular point of view.",
      "about.section2Kicker": "Our vision",
      "about.section2Title": "Recognition that<br>opens a next chapter.",
      "about.section2Copy": "AKFF recognizes promising voices early and builds meaningful visibility around their work. Our screenings connect filmmakers with audiences, working artists, and cultural conversations that continue beyond the festival.",
      "about.factsTitle": "Festival at a glance",
      "about.fact1Label": "Format",
      "about.fact1Value": "Offline · In-person screening",
      "about.fact2Label": "Location",
      "about.fact2Value": "Korea · Venue to be announced",
      "about.fact3Label": "Entries",
      "about.fact3Value": "Worldwide · Ages 10+",
      "about.fact4Label": "Official language",
      "about.fact4Value": "English",
      "about.fact5Label": "Subtitles",
      "about.fact5Value": "Korean subtitles required for non-Korean films",
      "about.fact6Label": "Submission",
      "about.fact6Value": "FilmFreeway only",
      "about.ctaKicker": "Enter the festival",
      "about.ctaTitle": "Your next audience<br>is waiting.",
      "awards.kicker": "02 · Awards",
      "awards.title": "Excellence<br><em>without borders.</em>",
      "awards.lead": "Four awards recognize artistic achievement across every genre, length, and format. All submitted films are considered together.",
      "awards.introKicker": "The four distinctions",
      "awards.introTitle": "One field.<br>Four honors.",
      "awards.introCopy": "The AKFF jury is composed of active professional filmmakers. Every decision is grounded in artistic quality, originality, and cinematic execution.",
      "awards.a1": "Best Film",
      "awards.a1d": "Presented to the work demonstrating the highest level of overall artistic and cinematic achievement through storytelling, direction, vision, and impact.",
      "awards.a2": "Best Director",
      "awards.a2d": "Presented to a director whose work reveals exceptional artistic vision, originality, and command of cinematic language.",
      "awards.a3": "Best Performance",
      "awards.a3d": "Presented for a performance of exceptional depth, authenticity, and emotional power, by an individual or ensemble.",
      "awards.a4": "Jury Special Prize",
      "awards.a4d": "Presented to a film distinguished by a singular voice, innovative approach, or perspective recognized by the jury.",
      "awards.noteKicker": "Jury & process",
      "awards.noteTitle": "Independent judgment.<br>Clear standards.",
      "awards.noteCopy": "Jury decisions are final. When no work meets the festival's standard for a distinction, that award may remain unpresented. Official selections receive AKFF laurels, and winners are announced during the festival period.",
      "awards.ctaKicker": "Present your work",
      "awards.ctaTitle": "Four awards.<br>One uncompromised vision.",
      "submit.kicker": "03 · Submission",
      "submit.title": "Your film.<br><em>Our screen.</em>",
      "submit.lead": "AKFF welcomes films from every country, genre, and format. All submissions are accepted exclusively through FilmFreeway.",
      "submit.processKicker": "How it works",
      "submit.processTitle": "From submission<br>to screening.",
      "submit.s1": "Prepare",
      "submit.s1d": "Complete your film information in English and prepare all required viewing materials.",
      "submit.s2": "Submit",
      "submit.s2d": "Send your entry through the official AKFF page on FilmFreeway.",
      "submit.s3": "Selection",
      "submit.s3d": "The programming team reviews every work and contacts selected filmmakers directly.",
      "submit.s4": "Screening",
      "submit.s4d": "Official selections are presented at the confirmed festival venue in Korea.",
      "submit.infoKicker": "Essential information",
      "submit.infoTitle": "Before you submit",
      "submit.i1": "Open to filmmakers worldwide, aged 10 and above.",
      "submit.i2": "All genres, lengths, and formats are eligible.",
      "submit.i3": "Submission information must be provided in English.",
      "submit.i4": "Non-Korean films require Korean subtitles for screening.",
      "submit.i5": "Official selections are announced through FilmFreeway.",
      "submit.i6": "Screening details follow after the venue is confirmed.",
      "submit.rules": "Download Rules & Terms",
      "submit.ctaKicker": "Official submissions",
      "submit.ctaTitle": "Ready when<br>your film is.",
      "contact.kicker": "04 · Contact",
      "contact.title": "Begin a<br><em>conversation.</em>",
      "contact.lead": "For program, submission, partnership, or press inquiries, contact the AKFF team through the official form.",
      "contact.formKicker": "Official inquiry",
      "contact.formTitle": "Write to AKFF",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.phone": "Phone · Optional",
      "contact.topic": "Topic · Optional",
      "contact.message": "Message",
      "contact.topicPlaceholder": "Program / Submission / Partnership / Press",
      "contact.helper": "We will respond as soon as possible.",
      "contact.send": "Send inquiry",
      "contact.subKicker": "Film submissions",
      "contact.subTitle": "All entries begin<br>on FilmFreeway.",
      "player.title": "DAL. HAE EYE · AKFF Featured Presentation",
      "player.play": "Play",
      "player.pause": "Pause",
      "player.mute": "Mute",
      "player.unmute": "Unmute",
      "player.fullscreen": "Fullscreen"
    },
    ko: {
      "skip": "본문으로 이동",
      "nav.screening": "상영",
      "nav.about": "영화제",
      "nav.awards": "시상",
      "nav.submit": "출품",
      "nav.contact": "문의",
      "menu.open": "메뉴 열기",
      "menu.close": "메뉴 닫기",
      "footer.organized": "ARA KOREA 주최",
      "footer.filmfreeway": "FilmFreeway",
      "footer.copyright": "Ara Korea Film Festival. All rights reserved.",
      "footer.context": "영화 · 퍼포먼스 · 뉴미디어",
      "common.festival": "아라 코리아 필름 페스티벌",
      "common.watch": "작품 관람",
      "common.discover": "AKFF 소개",
      "common.submit": "FilmFreeway 출품",
      "common.close": "닫기",
      "home.kicker": "대한민국 · 국제영화제",
      "home.heroCopy": "독창적인 시선과 새로운 영화 언어, 그리고 다음 장면을 만들어갈 예술가들을 위한 스크린.",
      "home.now": "현재 상영",
      "home.heroMeta": "DAL. HAE EYE · 실험예술영화",
      "home.introKicker": "살아 있는 스크린으로서의 영화제",
      "home.introTitle": "영화는 설명이 끝나는 곳에서 시작됩니다.",
      "home.introCopy": "AKFF는 독립영화와 신체적 퍼포먼스, 사운드, 뉴미디어를 하나의 밀도 높은 경험으로 연결합니다. 형식을 따르는 데 머물지 않고 자신만의 언어를 만드는 작품을 지지합니다.",
      "home.featureKicker": "주요 상영작 · 001",
      "home.featureTitle": "달.<br>해 아이",
      "home.featureType": "실험예술영화 · ARA KOREA",
      "home.featureCopy": "몸과 소리, 공간과 지각의 경계를 탐색하는 실험적 무빙이미지 작품입니다.",
      "home.manifestoKicker": "AKFF 핵심",
      "home.manifestoTitle": "서로 다른 목소리.<br>하나의 스크린.",
      "home.manifestoCopy": "전 세계 창작자에게 문을 열고, 장르와 길이, 형식의 경계를 넘어 예술적 완성도와 독창성, 분명한 시선을 기준으로 모든 작품을 평가합니다.",
      "home.stat1Value": "세계",
      "home.stat1Label": "전 세계 출품",
      "home.stat2Value": "현장",
      "home.stat2Label": "오프라인 극장 상영",
      "home.stat3Value": "04",
      "home.stat3Label": "종합적 완성도를 기리는 공식상",
      "home.awardsKicker": "AKFF 공식상",
      "home.awardsTitle": "네 개의 영예.<br>장르의 경계는 없습니다.",
      "home.award1": "최우수 작품상",
      "home.award2": "최우수 감독상",
      "home.award3": "최우수 연기상",
      "home.award4": "심사위원 특별상",
      "home.ctaKicker": "작품 공모",
      "home.ctaTitle": "당신의 영화를<br>빛 속으로.",
      "about.kicker": "01 · 영화제",
      "about.title": "새로운 목소리를<br>위한 <em>스크린.</em>",
      "about.lead": "AKFF는 대담한 작품을 발굴하고 세계의 신진 영화인을 지원하기 위해 대한민국에서 열리는 국제 오프라인 영화제입니다.",
      "about.section1Kicker": "AKFF가 존재하는 이유",
      "about.section1Title": "분류를 넘어.<br>영화 그 자체로.",
      "about.section1Copy1": "아라 코리아 필름 페스티벌은 동시대 문화와 정체성, 변화하는 영화적 표현을 탐구하는 작품을 선보입니다.",
      "about.section1Copy2": "작품을 형식이나 장르로 축소하지 않고, 독창성과 예술적 진정성, 고유한 관점의 선명함을 바라봅니다.",
      "about.section2Kicker": "우리의 비전",
      "about.section2Title": "다음 장을 여는<br>의미 있는 인정.",
      "about.section2Copy": "AKFF는 가능성 있는 목소리를 일찍 발견하고 작품이 제대로 보일 수 있는 기회를 만듭니다. 상영을 통해 창작자와 관객, 현장의 예술가, 동시대 문화 담론을 연결합니다.",
      "about.factsTitle": "영화제 한눈에 보기",
      "about.fact1Label": "형식",
      "about.fact1Value": "오프라인 · 현장 상영",
      "about.fact2Label": "장소",
      "about.fact2Value": "대한민국 · 추후 공지",
      "about.fact3Label": "출품 자격",
      "about.fact3Value": "전 세계 · 만 10세 이상",
      "about.fact4Label": "공식 언어",
      "about.fact4Value": "영어",
      "about.fact5Label": "자막",
      "about.fact5Value": "비한국어 작품은 한국어 자막 필수",
      "about.fact6Label": "출품 경로",
      "about.fact6Value": "FilmFreeway 단독 접수",
      "about.ctaKicker": "영화제 참여",
      "about.ctaTitle": "당신의 다음 관객이<br>기다리고 있습니다.",
      "awards.kicker": "02 · 시상",
      "awards.title": "경계 없는<br><em>예술적 성취.</em>",
      "awards.lead": "장르와 길이, 형식의 구분 없이 모든 작품을 함께 심사하여 네 개의 공식상으로 영화적 성취를 기립니다.",
      "awards.introKicker": "네 개의 공식상",
      "awards.introTitle": "하나의 무대.<br>네 개의 영예.",
      "awards.introCopy": "AKFF 심사위원단은 현역 전문 영화인으로 구성됩니다. 예술적 완성도와 독창성, 영화적 구현력을 바탕으로 모든 작품을 평가합니다.",
      "awards.a1": "최우수 작품상",
      "awards.a1d": "스토리텔링과 연출, 비전과 울림을 아울러 가장 높은 수준의 예술적·영화적 성취를 보여준 작품에 수여합니다.",
      "awards.a2": "최우수 감독상",
      "awards.a2d": "탁월한 예술적 비전과 독창성, 영화 언어에 대한 깊은 통솔력을 보여준 감독에게 수여합니다.",
      "awards.a3": "최우수 연기상",
      "awards.a3d": "깊이와 진정성, 강렬한 정서적 힘을 구현한 개인 또는 앙상블의 연기에 수여합니다.",
      "awards.a4": "심사위원 특별상",
      "awards.a4d": "독자적인 목소리와 혁신적인 접근, 뚜렷한 관점으로 심사위원단의 주목을 받은 작품에 수여합니다.",
      "awards.noteKicker": "심사위원단과 절차",
      "awards.noteTitle": "독립적인 판단.<br>명확한 기준.",
      "awards.noteCopy": "심사 결과는 최종적입니다. 기준에 부합하는 작품이 없을 경우 해당 상은 수여하지 않을 수 있습니다. 공식 선정작에는 AKFF 로렐이 제공되며 수상작은 영화제 기간에 발표됩니다.",
      "awards.ctaKicker": "작품을 선보이세요",
      "awards.ctaTitle": "네 개의 상.<br>타협하지 않는 하나의 비전.",
      "submit.kicker": "03 · 출품",
      "submit.title": "당신의 영화.<br><em>우리의 스크린.</em>",
      "submit.lead": "AKFF는 모든 국가와 장르, 형식의 작품을 기다립니다. 출품은 FilmFreeway를 통해서만 접수합니다.",
      "submit.processKicker": "진행 과정",
      "submit.processTitle": "출품에서<br>상영까지.",
      "submit.s1": "준비",
      "submit.s1d": "작품 정보를 영어로 작성하고 심사에 필요한 모든 자료를 준비합니다.",
      "submit.s2": "출품",
      "submit.s2d": "FilmFreeway의 AKFF 공식 페이지를 통해 작품을 접수합니다.",
      "submit.s3": "선정",
      "submit.s3d": "프로그래밍팀이 모든 작품을 검토하고 선정된 영화인에게 직접 연락합니다.",
      "submit.s4": "상영",
      "submit.s4d": "공식 선정작은 확정된 대한민국 내 영화제 장소에서 상영됩니다.",
      "submit.infoKicker": "필수 안내",
      "submit.infoTitle": "출품 전 확인사항",
      "submit.i1": "만 10세 이상의 전 세계 영화인이 참여할 수 있습니다.",
      "submit.i2": "모든 장르와 길이, 형식의 작품을 받습니다.",
      "submit.i3": "출품 정보는 영어로 작성해야 합니다.",
      "submit.i4": "비한국어 작품은 상영용 한국어 자막이 필요합니다.",
      "submit.i5": "공식 선정 결과는 FilmFreeway에서 발표합니다.",
      "submit.i6": "장소 확정 후 세부 상영 정보를 안내합니다.",
      "submit.rules": "규정 및 약관 내려받기",
      "submit.ctaKicker": "공식 출품",
      "submit.ctaTitle": "당신의 영화가 준비되는<br>바로 그 순간.",
      "contact.kicker": "04 · 문의",
      "contact.title": "대화를<br><em>시작하세요.</em>",
      "contact.lead": "프로그램, 출품, 협력, 언론 관련 문의는 공식 양식을 통해 AKFF 팀에 보내주세요.",
      "contact.formKicker": "공식 문의",
      "contact.formTitle": "AKFF에 보내기",
      "contact.name": "이름",
      "contact.email": "이메일",
      "contact.phone": "전화번호 · 선택",
      "contact.topic": "문의 분야 · 선택",
      "contact.message": "문의 내용",
      "contact.topicPlaceholder": "프로그램 / 출품 / 협력 / 언론",
      "contact.helper": "가능한 한 빠르게 답변드리겠습니다.",
      "contact.send": "문의 보내기",
      "contact.subKicker": "영화 출품",
      "contact.subTitle": "모든 출품은<br>FilmFreeway에서 시작됩니다.",
      "player.title": "DAL. HAE EYE · AKFF 주요 상영작",
      "player.play": "재생",
      "player.pause": "일시정지",
      "player.mute": "음소거",
      "player.unmute": "소리 켜기",
      "player.fullscreen": "전체화면"
    },
    ja: {
      "skip": "本文へ移動",
      "nav.screening": "上映",
      "nav.about": "映画祭",
      "nav.awards": "アワード",
      "nav.submit": "応募",
      "nav.contact": "お問い合わせ",
      "menu.open": "メニューを開く",
      "menu.close": "メニューを閉じる",
      "footer.organized": "主催 ARA KOREA",
      "footer.filmfreeway": "FilmFreeway",
      "footer.copyright": "Ara Korea Film Festival. All rights reserved.",
      "footer.context": "映画 · パフォーマンス · ニューメディア",
      "common.festival": "アラ・コリア・フィルム・フェスティバル",
      "common.watch": "作品を見る",
      "common.discover": "AKFFについて",
      "common.submit": "FilmFreewayで応募",
      "common.close": "閉じる",
      "home.kicker": "韓国 · 国際映画祭",
      "home.heroCopy": "独自の視点、新しい映画言語、そして次の表現を切り開くアーティストのためのスクリーン。",
      "home.now": "上映中",
      "home.heroMeta": "DAL. HAE EYE · 実験芸術映画",
      "home.introKicker": "生きたスクリーンとしての映画祭",
      "home.introTitle": "映画は、説明が終わる場所から始まる。",
      "home.introCopy": "AKFFはインディペンデント映画、身体表現、サウンド、ニューメディアを一つの濃密な体験へと結びます。形式に従うだけでなく、自らの言語を生み出す作品を支持します。",
      "home.featureKicker": "注目上映作品 · 001",
      "home.featureTitle": "DAL.<br>HAE EYE",
      "home.featureType": "実験芸術映画 · ARA KOREA",
      "home.featureCopy": "身体、音、空間、知覚の境界を探る実験的な映像作品。",
      "home.manifestoKicker": "AKFFの焦点",
      "home.manifestoTitle": "異なる声。<br>ひとつのスクリーン。",
      "home.manifestoCopy": "世界中の映像作家に門戸を開き、ジャンル、長さ、形式を越えて、芸術性、独創性、明確な視点を基準に作品を評価します。",
      "home.stat1Value": "世界",
      "home.stat1Label": "世界各国からの応募",
      "home.stat2Value": "現場",
      "home.stat2Label": "対面型シネマ体験",
      "home.stat3Value": "04",
      "home.stat3Label": "総合的な卓越性を称える賞",
      "home.awardsKicker": "AKFFアワード",
      "home.awardsTitle": "4つの栄誉。<br>ジャンルの壁はない。",
      "home.award1": "最優秀作品賞",
      "home.award2": "最優秀監督賞",
      "home.award3": "最優秀演技賞",
      "home.award4": "審査員特別賞",
      "home.ctaKicker": "作品募集",
      "home.ctaTitle": "あなたの映画を<br>光の中へ。",
      "about.kicker": "01 · 映画祭",
      "about.title": "新しい声のための<br><em>スクリーン。</em>",
      "about.lead": "AKFFは大胆な作品を発掘し、世界の新進映像作家を支援する、韓国開催の国際対面型映画祭です。",
      "about.section1Kicker": "AKFFが存在する理由",
      "about.section1Title": "カテゴリーを越え、<br>映画そのものへ。",
      "about.section1Copy1": "アラ・コリア・フィルム・フェスティバルは、現代文化、アイデンティティ、進化する映画表現に向き合う作品を紹介します。",
      "about.section1Copy2": "作品を形式やジャンルに還元せず、独創性、芸術的誠実さ、固有の視点の明確さを見つめます。",
      "about.section2Kicker": "私たちのビジョン",
      "about.section2Title": "次の章を開く<br>意味ある評価。",
      "about.section2Copy": "AKFFは有望な声を早期に見いだし、その作品が正しく届く機会をつくります。上映を通じて作家、観客、現役アーティスト、文化的対話を結びます。",
      "about.factsTitle": "映画祭概要",
      "about.fact1Label": "形式",
      "about.fact1Value": "オフライン · 対面上映",
      "about.fact2Label": "開催地",
      "about.fact2Value": "韓国 · 会場は後日発表",
      "about.fact3Label": "応募資格",
      "about.fact3Value": "世界各国 · 10歳以上",
      "about.fact4Label": "公式言語",
      "about.fact4Value": "英語",
      "about.fact5Label": "字幕",
      "about.fact5Value": "韓国語以外の作品は韓国語字幕必須",
      "about.fact6Label": "応募方法",
      "about.fact6Value": "FilmFreewayのみ",
      "about.ctaKicker": "映画祭へ",
      "about.ctaTitle": "次の観客が<br>待っています。",
      "awards.kicker": "02 · アワード",
      "awards.title": "境界なき<br><em>芸術的達成。</em>",
      "awards.lead": "ジャンル、長さ、形式を分けず、すべての作品を同じ場で審査し、4つの賞で映画的達成を称えます。",
      "awards.introKicker": "4つの賞",
      "awards.introTitle": "ひとつの舞台。<br>4つの栄誉。",
      "awards.introCopy": "AKFFの審査員は現役の映画専門家で構成されます。芸術性、独創性、映画的実現力を基準に評価します。",
      "awards.a1": "最優秀作品賞",
      "awards.a1d": "物語、演出、ビジョン、影響力を通じて、最も高い芸術的・映画的達成を示した作品に贈られます。",
      "awards.a2": "最優秀監督賞",
      "awards.a2d": "卓越した芸術的ビジョン、独創性、映画言語への深い統率力を示した監督に贈られます。",
      "awards.a3": "最優秀演技賞",
      "awards.a3d": "深み、真実味、強い感情的力を備えた個人またはアンサンブルの演技に贈られます。",
      "awards.a4": "審査員特別賞",
      "awards.a4d": "独自の声、革新的なアプローチ、鮮明な視点で審査員の注目を集めた作品に贈られます。",
      "awards.noteKicker": "審査とプロセス",
      "awards.noteTitle": "独立した判断。<br>明確な基準。",
      "awards.noteCopy": "審査結果は最終決定です。基準を満たす作品がない場合、該当賞を授与しないことがあります。公式選出作品にはAKFFローレルが提供され、受賞作は映画祭期間中に発表されます。",
      "awards.ctaKicker": "作品を発表する",
      "awards.ctaTitle": "4つの賞。<br>妥協のないひとつのビジョン。",
      "submit.kicker": "03 · 応募",
      "submit.title": "あなたの映画。<br><em>私たちのスクリーン。</em>",
      "submit.lead": "AKFFはあらゆる国、ジャンル、形式の作品を歓迎します。応募はFilmFreewayのみで受け付けます。",
      "submit.processKicker": "応募の流れ",
      "submit.processTitle": "応募から<br>上映まで。",
      "submit.s1": "準備",
      "submit.s1d": "作品情報を英語で記入し、審査に必要な素材を準備します。",
      "submit.s2": "応募",
      "submit.s2d": "FilmFreewayのAKFF公式ページから作品を送信します。",
      "submit.s3": "選考",
      "submit.s3d": "プログラミングチームが全作品を審査し、選出者へ直接連絡します。",
      "submit.s4": "上映",
      "submit.s4d": "公式選出作品は韓国内の確定した映画祭会場で上映されます。",
      "submit.infoKicker": "重要事項",
      "submit.infoTitle": "応募前の確認",
      "submit.i1": "10歳以上の世界中の映像作家が応募できます。",
      "submit.i2": "すべてのジャンル、長さ、形式を受け付けます。",
      "submit.i3": "応募情報は英語で記入してください。",
      "submit.i4": "韓国語以外の作品は上映用韓国語字幕が必要です。",
      "submit.i5": "公式選出結果はFilmFreewayで発表されます。",
      "submit.i6": "会場確定後に上映詳細を案内します。",
      "submit.rules": "規約をダウンロード",
      "submit.ctaKicker": "公式応募",
      "submit.ctaTitle": "映画の準備が整う<br>その瞬間に。",
      "contact.kicker": "04 · お問い合わせ",
      "contact.title": "対話を<br><em>始める。</em>",
      "contact.lead": "プログラム、応募、提携、プレスに関するお問い合わせは、公式フォームからAKFFチームへお送りください。",
      "contact.formKicker": "公式お問い合わせ",
      "contact.formTitle": "AKFFに連絡",
      "contact.name": "お名前",
      "contact.email": "メール",
      "contact.phone": "電話番号 · 任意",
      "contact.topic": "件名 · 任意",
      "contact.message": "メッセージ",
      "contact.topicPlaceholder": "プログラム / 応募 / 提携 / プレス",
      "contact.helper": "できるだけ早くご返信します。",
      "contact.send": "送信する",
      "contact.subKicker": "作品応募",
      "contact.subTitle": "すべての応募は<br>FilmFreewayから。",
      "player.title": "DAL. HAE EYE · AKFF注目上映作品",
      "player.play": "再生",
      "player.pause": "一時停止",
      "player.mute": "ミュート",
      "player.unmute": "音声をオン",
      "player.fullscreen": "全画面"
    },
    zh: {
      "skip": "跳转至正文",
      "nav.screening": "放映",
      "nav.about": "影展",
      "nav.awards": "奖项",
      "nav.submit": "投稿",
      "nav.contact": "联系",
      "menu.open": "打开菜单",
      "menu.close": "关闭菜单",
      "footer.organized": "ARA KOREA 主办",
      "footer.filmfreeway": "FilmFreeway",
      "footer.copyright": "Ara Korea Film Festival. All rights reserved.",
      "footer.context": "电影 · 表演 · 新媒体",
      "common.festival": "阿拉韩国电影节",
      "common.watch": "观看影片",
      "common.discover": "了解 AKFF",
      "common.submit": "通过 FilmFreeway 投稿",
      "common.close": "关闭",
      "home.kicker": "韩国 · 国际电影节",
      "home.heroCopy": "为独特视野、新电影语言，以及正在塑造下一幕的艺术家而设的银幕。",
      "home.now": "正在放映",
      "home.heroMeta": "DAL. HAE EYE · 实验艺术电影",
      "home.introKicker": "作为鲜活银幕的电影节",
      "home.introTitle": "电影始于解释终止之处。",
      "home.introCopy": "AKFF将独立电影、身体表演、声音与新媒体汇聚为一次专注而深刻的体验。我们支持不拘泥于形式、创造自身语言的作品。",
      "home.featureKicker": "焦点放映 · 001",
      "home.featureTitle": "DAL.<br>HAE EYE",
      "home.featureType": "实验艺术电影 · ARA KOREA",
      "home.featureCopy": "探索身体、声音、空间与感知边界的实验影像作品。",
      "home.manifestoKicker": "AKFF聚焦",
      "home.manifestoTitle": "不同声音。<br>同一银幕。",
      "home.manifestoCopy": "我们面向全球创作者开放，跨越类型、长度与形式，以艺术完整性、原创性和清晰视角评审每一部作品。",
      "home.stat1Value": "全球",
      "home.stat1Label": "接受世界各地投稿",
      "home.stat2Value": "现场",
      "home.stat2Label": "线下影院体验",
      "home.stat3Value": "04",
      "home.stat3Label": "表彰综合卓越成就的奖项",
      "home.awardsKicker": "AKFF奖项",
      "home.awardsTitle": "四项荣誉。<br>不设类型壁垒。",
      "home.award1": "最佳影片",
      "home.award2": "最佳导演",
      "home.award3": "最佳表演",
      "home.award4": "评审团特别奖",
      "home.ctaKicker": "征片启事",
      "home.ctaTitle": "让你的电影<br>走入光中。",
      "about.kicker": "01 · 影展",
      "about.title": "为新声音而设的<br><em>银幕。</em>",
      "about.lead": "AKFF是在韩国举办的国际线下电影节，致力于发掘大胆作品并支持全球新锐电影人。",
      "about.section1Kicker": "AKFF存在的理由",
      "about.section1Title": "超越分类。<br>回到电影本身。",
      "about.section1Copy1": "阿拉韩国电影节呈现关注当代文化、身份认同与不断演变的电影表达的作品。",
      "about.section1Copy2": "我们不以形式或类型限制影片，而是关注原创性、艺术诚意与独特观点的清晰度。",
      "about.section2Kicker": "我们的愿景",
      "about.section2Title": "让认可开启<br>新的篇章。",
      "about.section2Copy": "AKFF及早发现具有潜力的声音，并为作品创造真正被看见的机会。放映连接电影人、观众、业界艺术家与持续发生的文化对话。",
      "about.factsTitle": "影展概览",
      "about.fact1Label": "形式",
      "about.fact1Value": "线下 · 现场放映",
      "about.fact2Label": "地点",
      "about.fact2Value": "韩国 · 场地待公布",
      "about.fact3Label": "资格",
      "about.fact3Value": "全球 · 10岁以上",
      "about.fact4Label": "官方语言",
      "about.fact4Value": "英语",
      "about.fact5Label": "字幕",
      "about.fact5Value": "非韩语影片须配韩语字幕",
      "about.fact6Label": "投稿",
      "about.fact6Value": "仅限 FilmFreeway",
      "about.ctaKicker": "加入影展",
      "about.ctaTitle": "你的下一批观众<br>正在等待。",
      "awards.kicker": "02 · 奖项",
      "awards.title": "无界的<br><em>艺术成就。</em>",
      "awards.lead": "不区分类型、长度与形式，所有作品共同评审，以四项官方奖项表彰电影成就。",
      "awards.introKicker": "四项荣誉",
      "awards.introTitle": "同一赛场。<br>四项荣誉。",
      "awards.introCopy": "AKFF评审团由活跃于业界的专业电影人组成，以艺术品质、原创性和电影表达完成度评审所有作品。",
      "awards.a1": "最佳影片",
      "awards.a1d": "授予在叙事、导演、视野与影响力方面展现最高综合艺术与电影成就的作品。",
      "awards.a2": "最佳导演",
      "awards.a2d": "授予展现卓越艺术视野、原创性和电影语言掌控力的导演。",
      "awards.a3": "最佳表演",
      "awards.a3d": "授予具有深度、真实感与强烈情感力量的个人或群体表演。",
      "awards.a4": "评审团特别奖",
      "awards.a4d": "授予以独特声音、创新方法或鲜明视角获得评审团关注的影片。",
      "awards.noteKicker": "评审与流程",
      "awards.noteTitle": "独立判断。<br>清晰标准。",
      "awards.noteCopy": "评审决定为最终决定。若无作品达到影展标准，相关奖项可不颁发。官方入选作品将获得AKFF桂冠，获奖结果于影展期间公布。",
      "awards.ctaKicker": "呈现你的作品",
      "awards.ctaTitle": "四项奖项。<br>一个毫不妥协的视野。",
      "submit.kicker": "03 · 投稿",
      "submit.title": "你的电影。<br><em>我们的银幕。</em>",
      "submit.lead": "AKFF欢迎来自所有国家、类型与形式的作品。投稿仅通过FilmFreeway接收。",
      "submit.processKicker": "投稿流程",
      "submit.processTitle": "从投稿<br>到放映。",
      "submit.s1": "准备",
      "submit.s1d": "使用英语填写影片信息，并准备评审所需的全部材料。",
      "submit.s2": "投稿",
      "submit.s2d": "通过FilmFreeway上的AKFF官方页面提交作品。",
      "submit.s3": "评选",
      "submit.s3d": "策展团队审阅全部作品，并直接联系入选电影人。",
      "submit.s4": "放映",
      "submit.s4d": "官方入选作品将在韩国确认的影展场地放映。",
      "submit.infoKicker": "重要信息",
      "submit.infoTitle": "投稿前须知",
      "submit.i1": "面向全球10岁及以上电影人开放。",
      "submit.i2": "接受所有类型、长度与形式。",
      "submit.i3": "投稿信息须以英语填写。",
      "submit.i4": "非韩语影片须配备放映用韩语字幕。",
      "submit.i5": "官方入选结果通过FilmFreeway公布。",
      "submit.i6": "场地确认后提供具体放映信息。",
      "submit.rules": "下载规则与条款",
      "submit.ctaKicker": "官方投稿",
      "submit.ctaTitle": "当你的电影<br>准备就绪。",
      "contact.kicker": "04 · 联系",
      "contact.title": "开始一场<br><em>对话。</em>",
      "contact.lead": "有关节目、投稿、合作或媒体事宜，请通过官方表格联系AKFF团队。",
      "contact.formKicker": "官方咨询",
      "contact.formTitle": "联系AKFF",
      "contact.name": "姓名",
      "contact.email": "电子邮件",
      "contact.phone": "电话 · 选填",
      "contact.topic": "主题 · 选填",
      "contact.message": "留言",
      "contact.topicPlaceholder": "节目 / 投稿 / 合作 / 媒体",
      "contact.helper": "我们会尽快回复。",
      "contact.send": "发送咨询",
      "contact.subKicker": "影片投稿",
      "contact.subTitle": "所有投稿均从<br>FilmFreeway开始。",
      "player.title": "DAL. HAE EYE · AKFF焦点放映",
      "player.play": "播放",
      "player.pause": "暂停",
      "player.mute": "静音",
      "player.unmute": "打开声音",
      "player.fullscreen": "全屏"
    }
  };

  function t(key, lang = activeLanguage) {
    return translations[lang]?.[key] ?? translations.en[key] ?? key;
  }

  function getPreferredLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (supported.includes(stored)) return stored;
    const browser = (navigator.language || "en").toLowerCase();
    if (browser.startsWith("ko")) return "ko";
    if (browser.startsWith("ja")) return "ja";
    if (browser.startsWith("zh")) return "zh";
    return "en";
  }

  let activeLanguage = getPreferredLanguage();

  const navItems = [
    { page: "home", href: "./index.html#screening", key: "nav.screening" },
    { page: "about", href: "./about.html", key: "nav.about" },
    { page: "awards", href: "./awards.html", key: "nav.awards" },
    { page: "submit", href: "./submit.html", key: "nav.submit" },
    { page: "contact", href: "./contact.html", key: "nav.contact" }
  ];

  function languageButtons(extraClass = "") {
    return `<div class="language-switcher ${extraClass}" aria-label="Language">
      ${supported.map(lang => `<button type="button" data-language="${lang}" aria-label="${lang}">${lang === "zh" ? "中" : lang.toUpperCase()}</button>`).join("")}
    </div>`;
  }

  function navMarkup(className) {
    return `<nav class="${className}" aria-label="Primary navigation">
      ${navItems.map(item => `<a href="${item.href}" ${currentPage === item.page ? 'aria-current="page"' : ""} data-i18n="${item.key}"></a>`).join("")}
    </nav>`;
  }

  function buildChrome() {
    const header = document.getElementById("siteHeader");
    const footer = document.getElementById("siteFooter");

    if (header) {
      header.className = "site-header";
      header.innerHTML = `
        <a class="brand" href="./index.html" aria-label="AKFF home">
          <span class="brand-mark">AK</span>
          <span class="brand-name">ARA KOREA FILM FESTIVAL</span>
        </a>
        ${navMarkup("desktop-nav")}
        <div class="header-actions">
          ${languageButtons("desktop-language")}
          <button class="menu-toggle" type="button" aria-controls="mobilePanel" aria-expanded="false" aria-label="Open menu">
            <span></span><span></span>
          </button>
        </div>`;
    }

    if (!document.getElementById("mobilePanel")) {
      const panel = document.createElement("div");
      panel.id = "mobilePanel";
      panel.className = "mobile-panel";
      panel.innerHTML = `${navMarkup("mobile-nav")}
        <div class="mobile-panel-meta">
          <span>Seoul · Korea</span>
          ${languageButtons("mobile-language")}
        </div>`;
      document.body.appendChild(panel);
    }

    if (footer) {
      footer.className = "site-footer";
      footer.innerHTML = `<div class="footer-inner">
        <div class="footer-top">
          <p class="footer-wordmark">AKFF</p>
          <div class="footer-links">
            <a href="https://arakorea.org" target="_blank" rel="noopener" data-i18n="footer.organized"></a>
            <a href="https://filmfreeway.com/arakorea" target="_blank" rel="noopener" data-i18n="footer.filmfreeway"></a>
            <a href="./about.html" data-i18n="nav.about"></a>
            <a href="./contact.html" data-i18n="nav.contact"></a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; <span data-current-year></span> <span data-i18n="footer.copyright"></span></span>
          <span data-i18n="footer.context"></span>
        </div>
      </div>`;
    }
  }

  function applyLanguage(lang) {
    if (!supported.includes(lang)) lang = "en";
    activeLanguage = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = htmlLang[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = t(el.dataset.i18n, lang);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml, lang);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder, lang));
    });
    document.querySelectorAll("[data-language]").forEach(button => {
      const isActive = button.dataset.language === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    document.querySelectorAll("[data-current-year]").forEach(el => {
      el.textContent = new Date().getFullYear();
    });
    document.dispatchEvent(new CustomEvent("akff:language", { detail: { lang } }));
  }

  function setupNavigation() {
    const toggle = document.querySelector(".menu-toggle");
    const panel = document.getElementById("mobilePanel");
    if (!toggle || !panel) return;

    const setMenu = open => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
      panel.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    };

    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    panel.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
    window.addEventListener("keydown", event => {
      if (event.key === "Escape") setMenu(false);
    });
  }

  function setupHeader() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 28);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6%" });
    elements.forEach(el => observer.observe(el));
  }

  let youtubePlayer = null;
  let youtubeReadyPromise = null;

  function loadYouTubeApi() {
    if (window.YT?.Player) return Promise.resolve();
    if (youtubeReadyPromise) return youtubeReadyPromise;
    youtubeReadyPromise = new Promise(resolve => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previous === "function") previous();
        resolve();
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    });
    return youtubeReadyPromise;
  }

  function setupScreening() {
    const modal = document.getElementById("screeningModal");
    if (!modal) return;
    const playerTarget = document.getElementById("akffPlayer");
    const closeButton = modal.querySelector("[data-player-close]");
    const playButton = modal.querySelector("[data-player-play]");
    const muteButton = modal.querySelector("[data-player-mute]");
    const fullscreenButton = modal.querySelector("[data-player-fullscreen]");
    const stage = modal.querySelector(".screening-stage");

    const updateControls = state => {
      const playing = state === 1;
      playButton.textContent = playing ? "\u2161" : "\u25B6";
      playButton.setAttribute("aria-label", t(playing ? "player.pause" : "player.play"));
      if (youtubePlayer?.isMuted) {
        const muted = youtubePlayer.isMuted();
        muteButton.textContent = muted ? "\u2669" : "\u266A";
        muteButton.setAttribute("aria-label", t(muted ? "player.unmute" : "player.mute"));
      }
    };

    const ensurePlayer = async () => {
      await loadYouTubeApi();
      if (youtubePlayer) return youtubePlayer;
      const playerVars = {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        playsinline: 1,
        rel: 0,
        iv_load_policy: 3
      };
      if (/^https?:$/.test(location.protocol)) playerVars.origin = location.origin;
      youtubePlayer = new YT.Player(playerTarget, {
        videoId: "4b6K4aricJc",
        playerVars,
        events: {
          onReady: event => {
            event.target.unMute();
            event.target.playVideo();
            updateControls(1);
          },
          onStateChange: event => {
            updateControls(event.data);
            if (event.data === 0) closeScreening();
          }
        }
      });
      return youtubePlayer;
    };

    const openScreening = async () => {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("screening-open");
      closeButton.focus();
      const player = await ensurePlayer();
      if (player?.playVideo) {
        player.seekTo(0, true);
        player.unMute();
        player.playVideo();
      }
    };

    function closeScreening() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("screening-open");
      youtubePlayer?.pauseVideo?.();
    }

    document.querySelectorAll("[data-open-screening]").forEach(button => {
      button.addEventListener("click", openScreening);
    });
    closeButton.addEventListener("click", closeScreening);
    modal.addEventListener("click", event => {
      if (event.target === modal) closeScreening();
    });
    playButton.addEventListener("click", () => {
      if (!youtubePlayer) return;
      const playing = youtubePlayer.getPlayerState() === 1;
      playing ? youtubePlayer.pauseVideo() : youtubePlayer.playVideo();
    });
    muteButton.addEventListener("click", () => {
      if (!youtubePlayer) return;
      youtubePlayer.isMuted() ? youtubePlayer.unMute() : youtubePlayer.mute();
      updateControls(youtubePlayer.getPlayerState());
    });
    fullscreenButton.addEventListener("click", () => {
      if (stage.requestFullscreen) stage.requestFullscreen();
      else if (stage.webkitRequestFullscreen) stage.webkitRequestFullscreen();
    });
    window.addEventListener("keydown", event => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) closeScreening();
      if (event.code === "Space" && modal.classList.contains("is-open")) {
        event.preventDefault();
        playButton.click();
      }
    });
    document.addEventListener("akff:language", () => {
      if (youtubePlayer?.getPlayerState) updateControls(youtubePlayer.getPlayerState());
      closeButton.setAttribute("aria-label", t("common.close"));
      fullscreenButton.setAttribute("aria-label", t("player.fullscreen"));
    });
  }

  buildChrome();
  applyLanguage(activeLanguage);
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-language]");
    if (button) applyLanguage(button.dataset.language);
  });
  setupNavigation();
  setupHeader();
  setupReveal();
  setupScreening();
})();

/* FilmFreeway logo enhancement */
(() => {
  const filmFreewayUrl = "https://filmfreeway.com/arakorea";
  const logoPath = "./filmfreeway-logo-hi.png";

  const link = document.querySelector(
    `body[data-page="submit"] .page-hero a[href="${filmFreewayUrl}"]`
  );

  if (!link || link.querySelector("img[data-filmfreeway-logo]")) return;

  const translatedLabel = link.querySelector("[data-i18n]");
  if (translatedLabel) translatedLabel.classList.add("visually-hidden");

  const logo = document.createElement("img");
  logo.src = logoPath;
  logo.alt = "FilmFreeway";
  logo.setAttribute("data-filmfreeway-logo", "");

  link.classList.add("filmfreeway-logo-link");
  link.setAttribute("aria-label", "Submit via FilmFreeway");
  link.prepend(logo);
})();