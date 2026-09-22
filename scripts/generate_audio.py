import asyncio
import os
import edge_tts

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "audio")
os.makedirs(OUTPUT_DIR, exist_ok=True)

VOICE_GU = "gu-IN-NiranjanNeural"
VOICE_EN = "en-IN-PrabhatNeural"

VIDEOS = [
    {
        "id": "full-company-intro",
        "gu": "Jagdamba Profile – 2002 થી steel trading અને CNC profile cutting ક્ષેત્રમાં વિશ્વાસપૂર્વક સેવા આપતી કંપની. અનેક grades નું ready stock, 300 એમએમ સુધી cutting capacity, quality material અને સમગ્ર ભારતમાં ઝડપી supply.",
        "en": "Jagdamba Profile – trusted since 2002 for steel trading and CNC profile cutting. Wide grade availability, cutting capacity up to 300 mm, quality material and fast supply across India."
    },
    {
        "id": "300mm-cutting",
        "gu": "અમે 300 એમએમ સુધીની જાડી પ્લેટનું CNC profile cutting precision સાથે કરીએ છીએ.",
        "en": "We deliver precision CNC profile cutting for heavy steel plates up to 300 mm thickness."
    },
    {
        "id": "cnc-specialists",
        "gu": "અમે CNC profile cutting માં specialists છીએ અને circle, ring, flange, custom profiles અને machine parts precision સાથે બનાવીએ છીએ.",
        "en": "We specialize in CNC profile cutting for circles, rings, flanges, custom profiles and heavy industrial machine parts with exact precision."
    },
    {
        "id": "all-grades",
        "gu": "અમારી પાસે industrial use માટે E250, E350, S355J2+N, SA516 Gr 70, C45, EN19 અને Hardox જેવા અનેક grades ready stock માં ઉપલબ્ધ છે.",
        "en": "We stock a wide range of industrial steel grades including E250, E350, S355J2+N, SA516 Gr 70, C45, EN19 and Hardox under one roof."
    },
    {
        "id": "grade-wise-yard",
        "gu": "અમારા yard માં plates grade wise, thickness wise અને code wise સુવ્યવસ્થિત રીતે રાખવામાં આવે છે.",
        "en": "Our yard is systematically organized grade-wise, thickness-wise and code-wise for efficient heavy handling."
    },
    {
        "id": "large-infrastructure",
        "gu": "26,000 sq ft shed, 75,000 sq ft open yard અને 4 x 20 ton crane facility સાથે અમે મોટા પ્રમાણમાં heavy material handle કરીએ છીએ.",
        "en": "With a 26,000 sq ft shed, 75,000 sq ft open yard and 4 x 20 ton cranes, we efficiently handle heavy steel stock."
    },
    {
        "id": "quality-ut-check",
        "gu": "અમારી પાસે quality inspection, ultrasonic testing, thickness checking અને test certificate સાથે material ઉપલબ્ધ છે.",
        "en": "We offer quality-checked material with ultrasonic testing, thickness verification and authentic test certificates."
    },
    {
        "id": "fast-delivery",
        "gu": "Craneથી plate loading, trailer, tempo અને pickup arrangement કરી અમે ઝડપી dispatch અને fast delivery આપીએ છીએ.",
        "en": "Overhead crane loading, coordinated trailer and tempo transport, ensuring fast dispatch and reliable delivery."
    },
    {
        "id": "all-india-supply",
        "gu": "Vadodara થી સમગ્ર ભારતભરમાં plate supply અને profile cutting service પ્રદાન કરીએ છીએ.",
        "en": "Supplying prime steel plates and profile cutting services from Vadodara across all industrial regions in India."
    },
    {
        "id": "1600-customers",
        "gu": "અત્યાર સુધીમાં અમે fabrication, pressure vessel, oil & gas અને machinery જેવા 1600 થી વધુ customers ને સેવા આપી છે.",
        "en": "We have proudly served more than 1600 customers across engineering, fabrication, oil & gas and machinery sectors."
    },
    {
        "id": "steel-traders-cutting",
        "gu": "Ready plate stockમાંથી customer requirement પ્રમાણે cutting કરીને dispatch સુધીની complete process એક જ સ્થળે.",
        "en": "Complete workflow under one roof: from ready mill plate stock to precision cut components and swift dispatch."
    },
    {
        "id": "brand-closing",
        "gu": "Jagdamba Profile – Steel. Precision. Reliability. 2002 થી વિશ્વસનીય સ્ટીલ ટ્રેડિંગ અને પ્રિસિઝન કટિંગ સોલ્યુશન્સ.",
        "en": "Jagdamba Profile – Steel. Precision. Reliability. Serving industry with excellence since 2002."
    }
]

async def generate_file(text, voice, out_path):
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(out_path)
    print(f"Generated: {os.path.basename(out_path)}")

async def main():
    tasks = []
    for item in VIDEOS:
        gu_path = os.path.join(OUTPUT_DIR, f"{item['id']}_gu.mp3")
        en_path = os.path.join(OUTPUT_DIR, f"{item['id']}_en.mp3")
        tasks.append(generate_file(item["gu"], VOICE_GU, gu_path))
        tasks.append(generate_file(item["en"], VOICE_EN, en_path))
    await asyncio.gather(*tasks)
    print("All 24 voiceover audio files successfully generated!")

if __name__ == "__main__":
    asyncio.run(main())
