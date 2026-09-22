export interface VideoItem {
  id: string;
  orderNumber: number;
  title: string;
  screenText: string;
  badge: string;
  category: "facility" | "cnc-profile-cutting" | "steel-stock" | "steel-yard" | "transport" | "ut-testing" | "components" | "factory";
  duration: string;
  isCoreTop6?: boolean;
  isFullFilm?: boolean;
  gujaratiVoiceover: string;
  hindiVoiceover: string;
  englishVoiceover: string;
  gujaratiSubtitle: string;
  hindiSubtitle: string;
  englishSubtitle: string;
  videoPrompt: string;
  youtubeId: string;
}

export const COMMON_BRAND_STYLE_PROMPT =
  "Industrial premium corporate style, realistic Indian steel factory environment, orange and blue brand color theme, cinematic lighting, high detail, clean composition, smooth camera movement, professional website promo look, realistic steel plates, cranes, trucks, workers with safety helmet, modern typography space, premium B2B branding, ultra realistic.";

export const fullCombinedFilm: VideoItem = {
  id: "full-combined-tour",
  orderNumber: 0,
  title: "Corporate Film & Plant Tour",
  screenText: "Jagdamba Profile • Corporate Overview & Plant Tour • Since 2002",
  badge: "Corporate Film",
  category: "facility",
  duration: "45s",
  isCoreTop6: true,
  isFullFilm: true,
  gujaratiVoiceover:
    "જગદંબા પ્રોફાઇલ વડોદરામાં આપનું સ્વાગત છે. વર્ષ ૨૦૦૨ થી સ્ટીલ ટ્રેડિંગ અને પ્રિસિઝન સી.એન.સી. પ્રોફાઇલ કટિંગમાં ભારતનું એક વિશ્વાસપાત્ર નામ. અમારી પાસે પંચોતેર હજાર સ્ક્વેર ફીટનો વિશાળ સ્ટોક યાર્ડ, ૨૬ હજાર સ્ક્વેર ફીટનો કવર્ડ શેડ અને ચાર વીસ ટન ઓવરહેડ ક્રેન્સની સુવિધા છે. ત્રણસો મિલીમીટર સુધીની હેવી પ્લેટોનું ચોકસાઈપૂર્વક કટિંગ, તમામ ઇન્ડસ્ટ્રીયલ ગ્રેડ્સનો રેડી સ્ટોક, અલ્ટ્રાસોનિક યુ.ટી. ટેસ્ટિંગ અને ઓલ-ઇન્ડિયા સુપરફાસ્ટ ટ્રાન્સપોર્ટ. સોળસોથી વધુ સંતુષ્ટ ગ્રાહકો સાથે – જગદંબા પ્રોફાઇલ: સ્ટીલ, પ્રિસિઝન અને વિશ્વસનીયતા.",
  hindiVoiceover:
    "जगदम्बा प्रोफाइल वडोदरा में आपका स्वागत है। वर्ष 2002 से स्टील ट्रेडिंग और सी.एन.सी. प्रोफाइल कटिंग में भारत का एक प्रतिष्ठित और विश्वसनीय नाम। 75,000 वर्ग फीट का विशाल ओपन स्टॉक यार्ड, 26,000 वर्ग फीट का शेड और चार 20 टन ओवरहेड क्रेन की आधुनिक सुविधा। तीन सौ मिलीमीटर तक की हैवी प्लेट कटिंग क्षमता, सभी प्रमुख इंडस्ट्रियल ग्रेड्स का रेडी स्टॉक, सटीक अल्ट्रासोनिक टेस्टिंग और पूरे भारत में सुपरफास्ट डिलीवरी। 1600 से अधिक संतुष्ट उद्योगों का विश्वास — जगदम्बा प्रोफाइल: स्टील, शुद्धता और विश्वसनीयता।",
  englishVoiceover:
    "Welcome to Jagdamba Profile, Vadodara. Trusted since 2002 as a leader in prime steel trading and precision CNC profile cutting. Backed by a 75,000 sq.ft. stockyard, 26,000 sq.ft. industrial shed, and 4 x 20-ton overhead cranes. Offering heavy cutting up to 300 mm, certified multi-grade ready stock, ultrasonic flaw testing, and swift pan-India dispatch. Serving over 1600 engineering leaders across India – Jagdamba Profile: Steel. Precision. Reliability.",
  gujaratiSubtitle:
    "જગદંબા પ્રોફાઇલ વડોદરા • ૨૦૦૨ થી સ્ટીલ ટ્રેડિંગ અને સી.એન.સી. પ્રોફાઇલ કટિંગ • ૭૫,૦૦૦ સ્ક્વેર ફીટ યાર્ડ • ૪ × ૨૦ ટન ક્રેન • ૩૦૦ mm કટિંગ • યુ.ટી. ટેસ્ટિંગ • ઓલ ઇન્ડિયા સપ્લાય",
  hindiSubtitle:
    "जगदम्बा प्रोफाइल वडोदरा • 2002 से स्टील ट्रेडिंग और सी.एन.सी. प्रोफाइल कटिंग • 75,000 वर्ग फीट यार्ड • 4 × 20 टन क्रेन • 300 mm हैवी कटिंग • यू.टी. टेस्टिंग • पैन इंडिया सप्लाई",
  englishSubtitle:
    "Jagdamba Profile Vadodara • Trusted Since 2002 • Steel Trading & CNC Cutting • 75,000 Sq.Ft. Yard • 4 × 20T Cranes • Up To 300 MM Cutting • UT Testing • Pan-India Supply",
  videoPrompt:
    "A continuous cinematic industrial tour of Jagdamba Profile facility in Vadodara. " +
    COMMON_BRAND_STYLE_PROMPT,
  youtubeId: "HqD24YvXqL4",
};

export const videosList: VideoItem[] = [
  fullCombinedFilm,
  {
    id: "full-company-intro",
    orderNumber: 1,
    title: "Company Intro Video",
    screenText: "Jagdamba Profile • Since 2002 • Steel Trading & CNC Profile Cutting",
    badge: "Company Intro",
    category: "facility",
    duration: "15s",
    isCoreTop6: true,
    gujaratiVoiceover:
      "જગદંબા પ્રોફાઇલ – વર્ષ ૨૦૦૨ થી સ્ટીલ ટ્રેડિંગ અને સી.એન.સી. પ્રોફાઇલ કટિંગમાં એક વિશ્વાસપાત્ર નામ. વિશાળ રેડી સ્ટોક, ૩૦૦ મિલીમીટર સુધી કટિંગ કેપેસિટી, ક્વોલિટી મટિરિયલ અને સમગ્ર ભારતમાં ઝડપી સપ્લાય.",
    hindiVoiceover:
      "जगदम्बा प्रोफाइल – वर्ष 2002 से स्टील ट्रेडिंग और सी.एन.सी. प्रोफाइल कटिंग में भारत का एक भरोसेमंद नाम। विशाल रेडी स्टॉक, 300 मिलीमीटर तक कटिंग क्षमता, क्वालिटी मटेरियल और पूरे भारत में तीव्र सप्लाई।",
    englishVoiceover:
      "Jagdamba Profile – trusted since 2002 for prime steel trading and precision CNC profile cutting. Extensive ready stock, heavy cutting up to 300 mm, certified quality and rapid nationwide dispatch.",
    gujaratiSubtitle:
      "જગદંબા પ્રોફાઇલ – ૨૦૦૨ થી સ્ટીલ ટ્રેડિંગ & સી.એન.સી. કટિંગ • ૩૦૦ mm સુધી કેપેસિટી • સમગ્ર ભારતમાં સપ્લાય",
    hindiSubtitle:
      "जगदम्बा प्रोफाइल – 2002 से स्टील ट्रेडिंग और सी.एन.सी. कटिंग • 300 mm तक कटिंग क्षमता • पूरे भारत में सप्लाई",
    englishSubtitle:
      "Jagdamba Profile – Since 2002 • Prime Steel Trading & CNC Cutting • Up to 300 mm • Fast Nationwide Supply",
    videoPrompt:
      "Create a premium company introduction video for Jagdamba Profile. Start with the factory entrance, then show the yard, stock of steel plates, overhead cranes, CNC profile cutting, transport loading, quality check, finished components, fast dispatch and nationwide delivery. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "300mm-cutting",
    orderNumber: 2,
    title: "300 MM Heavy Plate Cutting Video",
    screenText: "Heavy Plate Cutting Up To 300 MM",
    badge: "300 MM Cutting",
    category: "cnc-profile-cutting",
    duration: "10s",
    isCoreTop6: true,
    gujaratiVoiceover:
      "અમે ત્રણસો મિલીમીટર સુધીની હેવી પ્લેટોનું પ્રિસિઝન સી.એન.સી. પ્રોફાઇલ કટિંગ સંપૂર્ણ ચોકસાઈ સાથે કરીએ છીએ.",
    hindiVoiceover:
      "हम तीन सौ मिलीमीटर तक की भारी स्टील प्लेटों का अत्याधुनिक सी.एन.सी. प्रोफाइल कटिंग पूरी सटीकता के साथ करते हैं।",
    englishVoiceover:
      "We deliver precision CNC profile cutting for heavy industrial steel plates up to 300 millimeters thickness.",
    gujaratiSubtitle:
      "ત્રણસો મિલીમીટર (300 MM) સુધીની જાડી પ્લેટનું પ્રિસિઝન સી.એન.સી. પ્રોફાઇલ કટિંગ",
    hindiSubtitle:
      "तीन सौ मिलीमीटर (300 MM) तक की हैवी स्टील प्लेटों का प्रिसिजन सी.एन.सी. प्रोफाइल कटिंग",
    englishSubtitle:
      "Precision CNC Profile Cutting For Heavy Industrial Steel Plates Up To 300 MM Thickness",
    videoPrompt:
      "Show a powerful CNC profile cutting machine cutting a very thick heavy steel plate with bright sparks flying. Focus on the machine head, plate thickness, glowing cut line, and industrial environment. Show close-up shots of 300 mm thick steel plate being cut with precision. End with a strong hero shot of the machine and finished cut plate. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "cnc-specialists",
    orderNumber: 3,
    title: "CNC Profile Cutting Video",
    screenText: "CNC Profile Cutting Specialists",
    badge: "CNC Profiles",
    category: "cnc-profile-cutting",
    duration: "10s",
    isCoreTop6: true,
    gujaratiVoiceover:
      "અમે સી.એન.સી. પ્રોફાઇલ કટિંગ સ્પેશિયાલિસ્ટ છીએ; સર્કલ, રીંગ, ફ્લેંજ, કસ્ટમ પ્રોફાઇલ અને હેવી મશીન પાર્ટ્સ ચોકસાઈથી બનાવીએ છીએ.",
    hindiVoiceover:
      "हम सी.एन.सी. प्रोफाइल कटिंग विशेषज्ञ हैं; सर्कल, रिंग, फ्लैंज, कस्टम प्रोफाइल और हैवी मशीन पार्ट्स पूर्ण शुद्धता के साथ तैयार करते हैं।",
    englishVoiceover:
      "We specialize in CNC profile cutting for circles, rings, flanges, custom profiles and heavy engineering machinery parts.",
    gujaratiSubtitle:
      "સી.એન.સી. પ્રોફાઇલ કટિંગ સ્પેશિયાલિસ્ટ્સ • સર્કલ, રીંગ, ફ્લેંજ અને કસ્ટમ મશીનરી પાર્ટ્સ",
    hindiSubtitle:
      "सी.एन.सी. प्रोफाइल कटिंग विशेषज्ञ • सर्कल, रिंग, फ्लैंज, कस्टम प्रोफाइल्स और मशीन पार्ट्स",
    englishSubtitle:
      "CNC Profile Cutting Specialists • Rings, Flanges, Circles & Custom Industrial Machine Parts",
    videoPrompt:
      "Show CNC profile cutting of rings, flanges, circles, machine parts, custom profiles and industrial components. Include close-up shots of precision cutting, finished shapes, sparks, and clean edges. Show the machine working smoothly and multiple shapes being produced for engineering use. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "all-grades",
    orderNumber: 4,
    title: "All Grades Stock Video",
    screenText: "Multiple Grades Available Under One Roof",
    badge: "All Grades",
    category: "steel-stock",
    duration: "10s",
    isCoreTop6: true,
    gujaratiVoiceover:
      "અમારી પાસે ઇન્ડસ્ટ્રીયલ ઉપયોગ માટે E250, E350, S355, SA516 Gr 70, C45, EN19 અને હાર્ડોક્સ જેવા તમામ ગ્રેડ્સ રેડી સ્ટોકમાં ઉપલબ્ધ છે.",
    hindiVoiceover:
      "हमारे पास औद्योगिक उपयोग हेतु E250, E350, S355, SA516 Gr 70, C45, EN19 और हार्डॉक्स जैसे सभी ग्रेड्स रेडी स्टॉक में उपलब्ध हैं।",
    englishVoiceover:
      "We stock a complete range of certified industrial steel grades including E250, E350, S355, SA516 Gr 70, C45, EN19 and Hardox under one roof.",
    gujaratiSubtitle:
      "તમામ ગ્રેડ્સ રેડી સ્ટોક: E250, E350, S355J2+N, SA516 Gr 70, C45, EN19, Hardox 400/500",
    hindiSubtitle:
      "सभी ग्रेड्स रेडी स्टॉक: E250, E350, S355J2+N, SA516 Gr 70, C45, EN19, Hardox 400/500",
    englishSubtitle:
      "Ready Stock Across All Grades: E250, E350, S355J2+N, SA516 Gr 70, C45, EN19, Hardox",
    videoPrompt:
      "Show multiple steel plates stacked in a large industrial yard, each marked with different steel grades such as IS 2062 E250, E350, S355J2+N, SA516 Gr 70, P355NL, C45, EN19, Hardox 400, Hardox 500 and other industrial grades. Show workers inspecting markings and organized grade-wise stock. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "grade-wise-yard",
    orderNumber: 5,
    title: "Large Stock Yard Video",
    screenText: "Grade-Wise & Code-Wise Organized Stock Yard",
    badge: "Large Yard",
    category: "steel-yard",
    duration: "12s",
    isCoreTop6: true,
    gujaratiVoiceover:
      "અમારા યાર્ડમાં પ્લેટો ગ્રેડ-વાઇઝ, થીકનેસ-વાઇઝ અને કોડ-વાઇઝ અત્યંત સુવ્યવસ્થિત રીતે રાખવામાં આવે છે.",
    hindiVoiceover:
      "हमारे विशाल यार्ड में स्टील प्लेट्स को ग्रेड-वाइज, मोटाई-वाइज और कोड-वाइज पूर्णतः व्यवस्थित रूप से रखा जाता है।",
    englishVoiceover:
      "Our yard is systematically organized grade-wise, thickness-wise and heat-number wise for rapid tracking and heavy handling.",
    gujaratiSubtitle:
      "૭૫,૦૦૦ સ્ક્વેર ફીટ યાર્ડ • ગ્રેડ-વાઇઝ, થીકનેસ-વાઇઝ અને હીટ-કોડ-વાઇઝ સુવ્યવસ્થિત સ્ટોક",
    hindiSubtitle:
      "75,000 वर्ग फीट यार्ड • ग्रेड-वाइज, मोटाई-वाइज और हीट-कोड-वाइज पूर्णतः व्यवस्थित स्टॉक",
    englishSubtitle:
      "75,000 Sq. Ft. Stockyard • Systematically Organized Grade-Wise, Thickness-Wise & Code-Wise",
    videoPrompt:
      "Show a large open yard with neatly arranged steel plates stacked in rows. Each row should be organized grade-wise and code-wise with clear identification boards. Overhead crane moving plates, workers checking tags, wide-angle shot showing discipline and stock management. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "large-infrastructure",
    orderNumber: 6,
    title: "Infrastructure Video",
    screenText: "Large Infrastructure • 75,000 Sq. Ft. Yard • 4 x 20 Ton Cranes",
    badge: "Infrastructure",
    category: "facility",
    duration: "12s",
    isCoreTop6: true,
    gujaratiVoiceover:
      "છવ્વીસ હજાર સ્ક્વેર ફીટ શેડ, પંચોતેર હજાર સ્ક્વેર ફીટ ઓપન યાર્ડ અને ચાર વીસ ટન ક્રેન સાથે અમે હેવી મટિરિયલ સરળતાથી હેન્ડલ કરીએ છીએ.",
    hindiVoiceover:
      "छब्बीस हजार वर्ग फीट शेड, पचहत्तर हजार वर्ग फीट ओपन यार्ड और चार बीस टन क्रेनों के साथ हम भारी स्टील मटेरियल कुशलतापूर्वक संभालते हैं।",
    englishVoiceover:
      "With a 26,000 sq ft covered shed, 75,000 sq ft open yard and 4 x 20-ton overhead cranes, we handle massive industrial tonnage daily.",
    gujaratiSubtitle:
      "૨૬,૦૦૦ sq.ft શેડ • ૭૫,૦૦૦ sq.ft ઓપન યાર્ડ • ૪ × ૨૦ ટન ઓવરહેડ ક્રેન્સ કેપેસિટી",
    hindiSubtitle:
      "26,000 वर्ग फीट शेड • 75,000 वर्ग फीट ओपन यार्ड • 4 × 20 टन ओवरहेड क्रेन सुविधा",
    englishSubtitle:
      "26,000 Sq. Ft. Covered Shed • 75,000 Sq. Ft. Open Yard • 4 x 20-Ton Overhead Cranes",
    videoPrompt:
      "Show a large steel facility with a 26,000 sq ft shed, 75,000 sq ft open yard, overhead cranes, plate handling, loading and unloading operations, and strong infrastructure. Show scale, efficiency and industrial capability. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "quality-ut-check",
    orderNumber: 7,
    title: "Quality & UT Testing Video",
    screenText: "Quality Checked • UT Testing Available • Material With TC",
    badge: "Quality & UT",
    category: "ut-testing",
    duration: "10s",
    isCoreTop6: false,
    gujaratiVoiceover:
      "અમે સંપૂર્ણ ક્વોલિટી ઇન્સ્પેક્શન, અલ્ટ્રાસોનિક ટેસ્ટિંગ, થીકનેસ ચેકિંગ અને મિલ ટેસ્ટ સર્ટિફિકેટ સાથે મટિરિયલ આપીએ છીએ.",
    hindiVoiceover:
      "हम संपूर्ण गुणवत्ता निरीक्षण, अल्ट्रासोनिक टेस्टिंग, मोटाई सत्यापन और अधिकृत टेस्ट सर्टिफिकेट के साथ प्राइम मटेरियल उपलब्ध कराते हैं।",
    englishVoiceover:
      "We provide 100% quality-verified material with ultrasonic testing, digital thickness verification and mill test certificates.",
    gujaratiSubtitle:
      "અલ્ટ્રાસોનિક (UT) ટેસ્ટિંગ • ડિજિટલ થીકનેસ વેરિફિકેશન • ઓરિજિનલ મિલ ટેસ્ટ સર્ટિફિકેટ (TC)",
    hindiSubtitle:
      "अल्ट्रासोनिक (UT) टेस्टिंग • डिजिटल मोटाई सत्यापन • ओरिजिनल मिल टेस्ट सर्टिफिकेट (TC)",
    englishSubtitle:
      "Ultrasonic Flaw Testing • Digital Thickness Measurement • Certified Mill Test Reports (MTC)",
    videoPrompt:
      "Show quality inspection of steel plates using ultrasonic testing, thickness measurement, plate marking verification, and checking test certificates. Show a professional inspection team and close-up shots of measurement tools, UT inspection process, and documented quality checks. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "fast-delivery",
    orderNumber: 8,
    title: "Fast Loading & Dispatch Video",
    screenText: "Fast Dispatch • Transport Arrangement • Quick Delivery",
    badge: "Fast Dispatch",
    category: "transport",
    duration: "10s",
    isCoreTop6: false,
    gujaratiVoiceover:
      "ઓવરહેડ ક્રેનથી પ્લેટ લોડિંગ, ટ્રેલર અને ટેમ્પોનું તાત્કાલિક આયોજન કરી અમે ઝડપી ડિસ્પેચ અને સમયસર ડિલિવરી આપીએ છીએ.",
    hindiVoiceover:
      "ओवरहेड क्रेन द्वारा त्वरित प्लेट लोडिंग, ट्रेलर और टेम्पो की सुदृढ़ व्यवस्था कर हम सबसे तेज डिस्पैच और सुरक्षित डिलीवरी सुनिश्चित करते हैं।",
    englishVoiceover:
      "Overhead crane loading with dedicated heavy trailers and transport fleet ensures fast dispatch and on-time site delivery.",
    gujaratiSubtitle:
      "ઓવરહેડ ક્રેન લોડિંગ • ટ્રેલર અને ટેમ્પો લોજિસ્ટિક્સ • સુપરફાસ્ટ ડિસ્પેચ",
    hindiSubtitle:
      "ओवरहेड क्रेन लोडिंग • ट्रेलर और भारी वाहन व्यवस्था • सबसे तेज डिस्पैच और सुरक्षित डिलीवरी",
    englishSubtitle:
      "Overhead Crane Plate Loading • Dedicated Trailers & Trucks • Rapid Dispatch & Safe Delivery",
    videoPrompt:
      "Show steel plates being lifted by overhead crane, loaded onto trailers, tempos and pickup vehicles. Show dispatch team working fast, trucks leaving the yard, and delivery movement across highways. Emphasize fast dispatch, transport arrangement, and reliable service. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "all-india-supply",
    orderNumber: 9,
    title: "All India Supply Video",
    screenText: "All India Plate Supply & Profile Cutting Service",
    badge: "Pan India",
    category: "transport",
    duration: "12s",
    isCoreTop6: false,
    gujaratiVoiceover:
      "વડોદરા પ્લાન્ટથી સમગ્ર ભારતમાં પ્રાઇમ સ્ટીલ પ્લેટ સપ્લાય અને પ્રોફાઇલ કટિંગ સર્વિસ પૂરી પાડીએ છીએ.",
    hindiVoiceover:
      "वडोदरा प्लांट से पूरे भारत के प्रमुख औद्योगिक केंद्रों तक प्राइम स्टील प्लेट सप्लाई और प्रोफाइल कटिंग सर्विस प्रदान करते हैं।",
    englishVoiceover:
      "Supplying prime steel plates and profile cut components from Vadodara across all major industrial clusters in India.",
    gujaratiSubtitle:
      "વડોદરાથી સમગ્ર ભારતમાં સ્ટીલ પ્લેટ અને પ્રિસિઝન કટિંગ સપ્લાય",
    hindiSubtitle:
      "वडोदरा से संपूर्ण भारत में प्राइम स्टील प्लेट सप्लाई और प्रोफाइल कटिंग",
    englishSubtitle:
      "Supplying Prime Steel Plates & CNC Profile Cuts From Vadodara Across All Indian Industrial Hubs",
    videoPrompt:
      "Show an India map animation with Vadodara as the source point. Create glowing route lines spreading across major industrial cities in India. Blend map graphics with real visuals of steel plates, trucks, CNC cutting and dispatch. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "1600-customers",
    orderNumber: 10,
    title: "1600+ Customers / Trust Video",
    screenText: "Trusted By 1600+ Customers Across India",
    badge: "1600+ Clients",
    category: "components",
    duration: "10s",
    isCoreTop6: false,
    gujaratiVoiceover:
      "ફેબ્રિકેશન, પ્રેશર વેસલ, ઓઇલ એન્ડ ગેસ અને હેવી મશીનરી ક્ષેત્રના ૧૬૦૦થી વધુ ગ્રાહકોનો અતૂટ વિશ્વાસ.",
    hindiVoiceover:
      "फैब्रिकेशन, प्रेशर वेसल, ऑयल एंड गैस और भारी मशीनरी उद्योग के 1600 से अधिक संतुष्ट ग्राहकों का अटूट विश्वास।",
    englishVoiceover:
      "Proudly trusted by more than 1600 industrial leaders across heavy fabrication, pressure vessels, oil & gas and machine building.",
    gujaratiSubtitle:
      "૧૬૦૦+ ઔદ્યોગિક ગ્રાહકોનો વિશ્વાસ: પ્રેશર વેસલ્સ, ફેબ્રિકેશન, ઓઇલ & ગેસ, મશીનરી",
    hindiSubtitle:
      "1600+ औद्योगिक ग्राहकों का अटूट विश्वास: प्रेशर वेसल, फैब्रिकेशन, ऑयल एंड गैस, हेवी मशीनरी",
    englishSubtitle:
      "Trusted By 1,600+ Industrial Clients: Pressure Vessels, Heavy Fabrication, Oil & Gas, Machinery",
    videoPrompt:
      "Show a premium industrial corporate video representing customer trust. Use scenes of multiple industries such as fabrication, pressure vessel, machinery, infrastructure, engineering and industrial manufacturing. Add visual emphasis on trust, repeat business and nationwide service. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "steel-traders-cutting",
    orderNumber: 11,
    title: "Steel Trading + Cutting Under One Roof Video",
    screenText: "Steel Trading + Profile Cutting Under One Roof",
    badge: "One-Stop Source",
    category: "steel-stock",
    duration: "10s",
    isCoreTop6: false,
    gujaratiVoiceover:
      "રેડી પ્લેટ સ્ટોકથી લઇને કસ્ટમર જરૂરિયાત મુજબ કટિંગ અને ડિસ્પેચ સુધીની સંપૂર્ણ પ્રક્રિયા એક જ સ્થળે.",
    hindiVoiceover:
      "रेडी प्लेट स्टॉक से लेकर आपकी आवश्यकतानुसार सी.एन.सी. कटिंग और सीधे डिस्पैच तक की संपूर्ण सुविधा एक ही छत के नीचे।",
    englishVoiceover:
      "Complete turnkey workflow under one roof: from prime mill plate stock to precision cut shapes and rapid dispatch.",
    gujaratiSubtitle:
      "સ્ટીલ ટ્રેડિંગ + સી.એન.સી. કટિંગ એક જ સ્થળે: સ્ટોકમાંથી સીધું કટિંગ અને તાત્કાલિક ડિસ્પેચ",
    hindiSubtitle:
      "स्टील ट्रेडिंग + सी.एन.सी. कटिंग एक ही छत के नीचे: रेडी प्लेट्स से तुरंत कटिंग और डिस्पैच",
    englishSubtitle:
      "Integrated Turnkey Workflow Under One Roof: Raw Plate Stock to Precision Cut Components & Dispatch",
    videoPrompt:
      "Create a split-style industrial video showing one side as steel plate trading with heavy stock and multiple grades, and the other side as CNC profile cutting operations. Show raw material, stock yard, cutting machine, finished components, and loading operations. " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
  {
    id: "brand-closing",
    orderNumber: 12,
    title: "Brand / Closing Video",
    screenText: "Jagdamba Profile – Steel. Precision. Reliability. Since 2002.",
    badge: "Brand Film",
    category: "factory",
    duration: "12s",
    isCoreTop6: false,
    gujaratiVoiceover:
      "જગદંબા પ્રોફાઇલ – સ્ટીલ, પ્રિસિઝન, વિશ્વસનીયતા. ૨૦૦૨ થી અવિરત રાષ્ટ્ર નિર્માણમાં સહભાગી.",
    hindiVoiceover:
      "जगदम्बा प्रोफाइल – स्टील, शुद्धता, विश्वसनीयता। वर्ष 2002 से निरंतर भारत के औद्योगिक विकास में समर्पित।",
    englishVoiceover:
      "Jagdamba Profile – Steel. Precision. Reliability. Powering Indian engineering excellence since 2002.",
    gujaratiSubtitle:
      "જગદંબા પ્રોફાઇલ • સ્ટીલ. પ્રિસિઝન. વિશ્વસનીયતા. • ૨૦૦૨ થી અવિરત સેવા",
    hindiSubtitle:
      "जगदम्बा प्रोफाइल • स्टील. शुद्धता. विश्वसनीयता. • 2002 से समर्पित औद्योगिक सेवा",
    englishSubtitle:
      "Jagdamba Profile • Steel. Precision. Reliability. • Serving Indian Industry Since 2002",
    videoPrompt:
      "Cinematic brand film finale for Jagdamba Profile. Heroic shots of factory entrance, steel plate yard, CNC cutting sparks, 20-ton cranes, and dispatch trucks, ending on a premium steel-embossed brand logo with tagline: 'Jagdamba Profile – Steel. Precision. Reliability. Since 2002.' " +
      COMMON_BRAND_STYLE_PROMPT,
    youtubeId: "HqD24YvXqL4",
  },
];
