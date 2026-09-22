import asyncio
import os
import edge_tts

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "audio")
os.makedirs(OUTPUT_DIR, exist_ok=True)

VOICE_GU = "gu-IN-NiranjanNeural"
VOICE_HI = "hi-IN-MadhurNeural"
VOICE_EN = "en-IN-PrabhatNeural"

ALL_AUDIO_ITEMS = [
    {
        "id": "full-company-intro",
        "gu": "જગદંબા પ્રોફાઇલ – વર્ષ ૨૦૦૨ થી સ્ટીલ ટ્રેડિંગ અને સી.એન.સી. પ્રોફાઇલ કટિંગમાં એક વિશ્વાસપાત્ર નામ. વિશાળ રેડી સ્ટોક, ૩૦૦ મિલીમીટર સુધી કટિંગ કેપેસિટી, ક્વોલિટી મટિરિયલ અને સમગ્ર ભારતમાં ઝડપી સપ્લાય.",
        "hi": "जगदम्बा प्रोफाइल – वर्ष 2002 से स्टील ट्रेडिंग और सी.एन.सी. प्रोफाइल कटिंग में भारत का एक भरोसेमंद नाम। विशाल रेडी स्टॉक, 300 मिलीमीटर तक कटिंग क्षमता, क्वालिटी मटेरियल और पूरे भारत में तीव्र सप्लाई।",
        "en": "Jagdamba Profile – trusted since 2002 for prime steel trading and precision CNC profile cutting. Extensive ready stock, heavy cutting up to 300 mm, certified quality and rapid nationwide dispatch."
    },
    {
        "id": "300mm-cutting",
        "gu": "અમે ત્રણસો મિલીમીટર સુધીની હેવી પ્લેટોનું પ્રિસિઝન સી.એન.સી. પ્રોફાઇલ કટિંગ સંપૂર્ણ ચોકસાઈ સાથે કરીએ છીએ.",
        "hi": "हम तीन सौ मिलीमीटर तक की भारी स्टील प्लेटों का अत्याधुनिक सी.एन.सी. प्रोफाइल कटिंग पूरी सटीकता के साथ करते हैं।",
        "en": "We deliver precision CNC profile cutting for heavy industrial steel plates up to 300 millimeters thickness."
    },
    {
        "id": "cnc-specialists",
        "gu": "અમે સી.એન.સી. પ્રોફાઇલ કટિંગ સ્પેશિયાલિસ્ટ છીએ; સર્કલ, રીંગ, ફ્લેંજ, કસ્ટમ પ્રોફાઇલ અને હેવી મશીન પાર્ટ્સ ચોકસાઈથી બનાવીએ છીએ.",
        "hi": "हम सी.एन.सी. प्रोफाइल कटिंग विशेषज्ञ हैं; सर्कल, रिंग, फ्लैंज, कस्टम प्रोफाइल और हैवी मशीन पार्ट्स पूर्ण शुद्धता के साथ तैयार करते हैं।",
        "en": "We specialize in CNC profile cutting for circles, rings, flanges, custom profiles and heavy engineering machinery parts."
    },
    {
        "id": "all-grades",
        "gu": "અમારી પાસે ઇન્ડસ્ટ્રીયલ ઉપયોગ માટે E250, E350, S355, SA516 Gr 70, C45, EN19 અને હાર્ડોક્સ જેવા તમામ ગ્રેડ્સ રેડી સ્ટોકમાં ઉપલબ્ધ છે.",
        "hi": "हमारे पास औद्योगिक उपयोग हेतु E250, E350, S355, SA516 Gr 70, C45, EN19 और हार्डॉक्स जैसे सभी ग्रेड्स रेडी स्टॉक में उपलब्ध हैं।",
        "en": "We stock a complete range of certified industrial steel grades including E250, E350, S355, SA516 Gr 70, C45, EN19 and Hardox under one roof."
    },
    {
        "id": "grade-wise-yard",
        "gu": "અમારા યાર્ડમાં પ્લેટો ગ્રેડ-વાઇઝ, થીકનેસ-વાઇઝ અને કોડ-વાઇઝ અત્યંત સુવ્યવસ્થિત રીતે રાખવામાં આવે છે.",
        "hi": "हमारे विशाल यार्ड में स्टील प्लेट्स को ग्रेड-वाइज, मोटाई-वाइज और कोड-वाइज पूर्णतः व्यवस्थित रूप से रखा जाता है।",
        "en": "Our yard is systematically organized grade-wise, thickness-wise and heat-number wise for rapid tracking and heavy handling."
    },
    {
        "id": "large-infrastructure",
        "gu": "છવ્વીસ હજાર સ્ક્વેર ફીટ શેડ, પંચોતેર હજાર સ્ક્વેર ફીટ ઓપન યાર્ડ અને ચાર વીસ ટન ક્રેન સાથે અમે હેવી મટિરિયલ સરળતાથી હેન્ડલ કરીએ છીએ.",
        "hi": "छब्बीस हजार वर्ग फीट शेड, पचहत्तर हजार वर्ग फीट ओपन यार्ड और चार बीस टन क्रेनों के साथ हम भारी स्टील मटेरियल कुशलतापूर्वक संभालते हैं।",
        "en": "With a 26,000 sq ft covered shed, 75,000 sq ft open yard and 4 x 20-ton overhead cranes, we handle massive industrial tonnage daily."
    },
    {
        "id": "quality-ut-check",
        "gu": "અમે સંપૂર્ણ ક્વોલિટી ઇન્સ્પેક્શન, અલ્ટ્રાસોનિક ટેસ્ટિંગ, થીકનેસ ચેકિંગ અને મિલ ટેસ્ટ સર્ટિફિકેટ સાથે મટિરિયલ આપીએ છીએ.",
        "hi": "हम संपूर्ण गुणवत्ता निरीक्षण, अल्ट्रासोनिक टेस्टिंग, मोटाई सत्यापन और अधिकृत टेस्ट सर्टिफिकेट के साथ प्राइम मटेरियल उपलब्ध कराते हैं।",
        "en": "We provide 100% quality-verified material with ultrasonic testing, digital thickness verification and mill test certificates."
    },
    {
        "id": "fast-delivery",
        "gu": "ઓવરહેડ ક્રેનથી પ્લેટ લોડિંગ, ટ્રેલર અને ટેમ્પોનું તાત્કાલિક આયોજન કરી અમે ઝડપી ડિસ્પેચ અને સમયસર ડિલિવરી આપીએ છીએ.",
        "hi": "ओवरहेड क्रेन द्वारा त्वरित प्लेट लोडिंग, ट्रेलर और टेम्पो की सुदृढ़ व्यवस्था कर हम सबसे तेज डिस्पैच और सुरक्षित डिलीवरी सुनिश्चित करते हैं।",
        "en": "Overhead crane loading with dedicated heavy trailers and transport fleet ensures fast dispatch and on-time site delivery."
    },
    {
        "id": "all-india-supply",
        "gu": "વડોદરા પ્લાન્ટથી સમગ્ર ભારતમાં પ્રાઇમ સ્ટીલ પ્લેટ સપ્લાય અને પ્રોફાઇલ કટિંગ સર્વિસ પૂરી પાડીએ છીએ.",
        "hi": "वडोदरा प्लांट से पूरे भारत के प्रमुख औद्योगिक केंद्रों तक प्राइम स्टील प्लेट सप्लाई और प्रोफाइल कटिंग सर्विस प्रदान करते हैं।",
        "en": "Supplying prime steel plates and profile cut components from Vadodara across all major industrial clusters in India."
    },
    {
        "id": "1600-customers",
        "gu": "ફેબ્રિકેશન, પ્રેશર વેસલ, ઓઇલ એન્ડ ગેસ અને હેવી મશીનરી ક્ષેત્રના ૧૬૦૦થી વધુ ગ્રાહકોનો અતૂટ વિશ્વાસ.",
        "hi": "फैब्रिकेशन, प्रेशर वेसल, ऑयल एंड गैस और भारी मशीनरी उद्योग के 1600 से अधिक संतुष्ट ग्राहकों का अटूट विश्वास।",
        "en": "Proudly trusted by more than 1600 industrial leaders across heavy fabrication, pressure vessels, oil & gas and machine building."
    },
    {
        "id": "steel-traders-cutting",
        "gu": "રેડી પ્લેટ સ્ટોકથી લઇને કસ્ટમર જરૂરિયાત મુજબ કટિંગ અને ડિસ્પેચ સુધીની સંપૂર્ણ પ્રક્રિયા એક જ સ્થળે.",
        "hi": "रेडी प्लेट स्टॉक से लेकर आपकी आवश्यकतानुसार सी.एन.सी. कटिंग और सीधे डिस्पैच तक की संपूर्ण सुविधा एक ही छत के नीचे।",
        "en": "Complete turnkey workflow under one roof: from prime mill plate stock to precision cut shapes and rapid dispatch."
    },
    {
        "id": "brand-closing",
        "gu": "જગદંબા પ્રોફાઇલ – સ્ટીલ, પ્રિસિઝન, વિશ્વસનીયતા. ૨૦૦૨ થી અવિરત રાષ્ટ્ર નિર્માણમાં સહભાગી.",
        "hi": "जगदम्बा प्रोफाइल – स्टील, शुद्धता, विश्वसनीयता। वर्ष 2002 से निरंतर भारत के औद्योगिक विकास में समर्पित।",
        "en": "Jagdamba Profile – Steel. Precision. Reliability. Powering Indian engineering excellence since 2002."
    },
    {
        "id": "full-combined-tour",
        "gu": "જગદંબા પ્રોફાઇલ વડોદરામાં આપનું સ્વાગત છે. વર્ષ ૨૦૦૨ થી સ્ટીલ ટ્રેડિંગ અને પ્રિસિઝન સી.એન.સી. પ્રોફાઇલ કટિંગમાં ભારતનું એક વિશ્વાસપાત્ર નામ. અમારી પાસે પંચોતેર હજાર સ્ક્વેર ફીટનો વિશાળ સ્ટોક યાર્ડ, ૨૬ હજાર સ્ક્વેર ફીટનો કવર્ડ શેડ અને ચાર વીસ ટન ઓવરહેડ ક્રેન્સની સુવિધા છે. ત્રણસો મિલીમીટર સુધીની હેવી પ્લેટોનું ચોકસાઈપૂર્વક કટિંગ, તમામ ઇન્ડસ્ટ્રીયલ ગ્રેડ્સનો રેડી સ્ટોક, અલ્ટ્રાસોનિક યુ.ટી. ટેસ્ટિંગ અને ઓલ-ઇન્ડિયા સુપરફાસ્ટ ટ્રાન્સપોર્ટ. સોળસોથી વધુ સંતુષ્ટ ગ્રાહકો સાથે – જગદંબા પ્રોફાઇલ: સ્ટીલ, પ્રિસિઝન અને વિશ્વસનીયતા.",
        "hi": "जगदम्बा प्रोफाइल वडोदरा में आपका स्वागत है। वर्ष 2002 से स्टील ट्रेडिंग और सी.एन.सी. प्रोफाइल कटिंग में भारत का एक प्रतिष्ठित और विश्वसनीय नाम। 75,000 वर्ग फीट का विशाल ओपन स्टॉक यार्ड, 26,000 वर्ग फीट का शेड और चार 20 टन ओवरहेड क्रेन की आधुनिक सुविधा। तीन सौ मिलीमीटर तक की हैवी प्लेट कटिंग क्षमता, सभी प्रमुख इंडस्ट्रियल ग्रेड्स का रेडी स्टॉक, सटीक अल्ट्रासोनिक टेस्टिंग और पूरे भारत में सुपरफास्ट डिलीवरी। 1600 से अधिक संतुष्ट उद्योगों का विश्वास — जगदम्बा प्रोफाइल: स्टील, शुद्धता और विश्वसनीयता।",
        "en": "Welcome to Jagdamba Profile, Vadodara. Trusted since 2002 as a leader in prime steel trading and precision CNC profile cutting. Backed by a 75,000 sq.ft. stockyard, 26,000 sq.ft. industrial shed, and 4 x 20-ton overhead cranes. Offering heavy cutting up to 300 mm, certified multi-grade ready stock, ultrasonic flaw testing, and swift pan-India dispatch. Serving over 1600 engineering leaders across India – Jagdamba Profile: Steel. Precision. Reliability."
    }
]

async def generate_file(text, voice, out_path):
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(out_path)
    print(f"Generated: {os.path.basename(out_path)}")

async def main():
    tasks = []
    for item in ALL_AUDIO_ITEMS:
        gu_path = os.path.join(OUTPUT_DIR, f"{item['id']}_gu.mp3")
        hi_path = os.path.join(OUTPUT_DIR, f"{item['id']}_hi.mp3")
        en_path = os.path.join(OUTPUT_DIR, f"{item['id']}_en.mp3")
        tasks.append(generate_file(item["gu"], VOICE_GU, gu_path))
        tasks.append(generate_file(item["hi"], VOICE_HI, hi_path))
        tasks.append(generate_file(item["en"], VOICE_EN, en_path))
    await asyncio.gather(*tasks)
    print("All 39 voiceover audio files successfully generated!")

if __name__ == "__main__":
    asyncio.run(main())
