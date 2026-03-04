import svgPaths from "./svg-yoycaldmkr";
import imgImageAerialForest from "figma:asset/628cb00de3d8eaf721ebba1149ecc924447afa87.png";
import imgImageAdventureParkRopesCourse from "figma:asset/ecd5a3ac10f5dfc4bf2cc0272fb0050c8dd115cb.png";
import imgImageHupfburgenSpielplatz from "figma:asset/8b53a83afd61cad5d572346a0ca87a19f438eb8c.png";
import imgImageKlettern from "figma:asset/2343f739d21b70089f8531f6ed9d89a87f1ecda9.png";
import imgImagePaintball from "figma:asset/4a91cce0621134ede7d47bea84293b65d43906b8.png";
import imgImageTrampoline from "figma:asset/dffa930104097e824954fe9c47c2aa6fa5df4df2.png";
import imgImage from "figma:asset/e35a249b72e72f28fd1f6d6d854f0ff5d5e84495.png";
import imgImage1 from "figma:asset/b7ed87b5c67253b00f87b15309dfb169931aa60d.png";
import imgImage2 from "figma:asset/b94f578d8c02ae960ad3937684532e8e9c0a14bd.png";
import imgImageFaqSupport from "figma:asset/4f2b9af3d171f74c251e5dedfccd2647a48b9c66.png";

function Container() {
  return (
    <div className="h-[32px] relative shrink-0 w-[79.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#eec643] text-[24px] top-0 tracking-[-1.2px] uppercase">WEG WAY</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[6.8px] top-[3px] w-[60.75px]" data-name="Link">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[14px] text-white top-[8px] tracking-[0.35px] uppercase">Start</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[36px] left-[92.75px] rounded-[6.8px] top-[3px] w-[84.625px]" data-name="Link">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[14px] text-white top-[8px] tracking-[0.35px] uppercase">Der Park</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[36px] left-[209.38px] rounded-[6.8px] top-[3px] w-[98.563px]" data-name="Link">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[14px] text-white top-[8px] tracking-[0.35px] uppercase">Aktivitäten</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[36px] left-[339.94px] rounded-[6.8px] top-[3px] w-[65.172px]" data-name="Link">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[14px] text-white top-[8px] tracking-[0.35px] uppercase">Feiern</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[36px] left-[437.11px] rounded-[6.8px] top-[3px] w-[77.609px]" data-name="Link">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[12px] text-[14px] text-white top-[8px] tracking-[0.35px] uppercase">Kontakt</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bg-[#eec643] content-stretch flex h-[40px] items-start left-[546.72px] px-[24px] py-[8px] rounded-[33554400px] top-0 w-[104.125px]" data-name="Link">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a4d2e] text-[16px] tracking-[0.4px] uppercase">Buchen</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[650.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[#1a4d2e] content-stretch flex h-[80px] items-center justify-between left-0 px-[159px] top-0 w-[1534px]" data-name="Navbar">
      <Container />
      <Container1 />
    </div>
  );
}

function ImageAerialForest() {
  return (
    <div className="absolute h-[990px] left-0 top-0 w-[1534px]" data-name="Image (Aerial Forest)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAerialForest} />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[990px] left-0 top-0 w-[1534px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[990px] left-0 top-0 w-[1534px]" data-name="Container">
      <ImageAerialForest />
      <Container3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Oswald:Bold',sans-serif] font-bold gap-[26px] items-center justify-center leading-[86.4px] relative shrink-0 text-[96px] text-center tracking-[-4.8px] uppercase w-[963px]">
      <p className="relative shrink-0 text-white">Entdecke die Essenz</p>
      <p className="relative shrink-0 text-[#eec643]">der Natur</p>
      <p className="relative shrink-0 text-white">im Berliner Grunewald</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[214.36px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e87c46] h-[56px] relative rounded-[33554400px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-[266.359px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[24px] left-[119.5px] text-[16px] text-center text-white top-[16px] tracking-[1.6px] uppercase">Aktivitäten ansehen</p>
        <Icon />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[56px] relative rounded-[33554400px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] shrink-0 w-[194.156px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[32px] py-[16px] relative size-full">
        <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a4d2e] text-[16px] text-center tracking-[1.6px] uppercase">Mehr erfahren</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center pr-[0.016px] relative size-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[60px] items-center justify-center left-[calc(50%+0.19px)] px-[16px] top-[355.41px]" data-name="Container">
      <Frame />
      <Container5 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[96px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_0_24.18%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1534 72.788">
          <path d={svgPaths.p46d68c0} fill="var(--fill-0, #E87C46)" id="Vector" opacity="0.25" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_8.34%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1534 87.9914">
          <path d={svgPaths.p3afae180} fill="var(--fill-0, #1A4D2E)" id="Vector" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_24.24%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1534 72.7272">
          <path d={svgPaths.p3c794c00} fill="var(--fill-0, #E87C46)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[96px] items-start left-0 top-[894px] w-[1534px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[990px] overflow-clip relative shrink-0 w-full" data-name="Hero">
      <Container2 />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#eec643] blur-[64px] left-[-64px] opacity-20 rounded-[33554400px] size-[128px] top-[-64px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute border-2 border-[rgba(255,255,255,0.3)] border-solid h-[28px] left-0 rounded-[33554400px] top-0 w-[95.313px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[16px] text-[12px] text-white top-[4px] tracking-[1.2px] uppercase">Über Uns</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[180px] left-0 top-[52px] w-[607px]" data-name="Heading 2">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[60px] left-0 text-[48px] text-white top-[-1px] uppercase w-[571px] whitespace-pre-wrap">WEG WAY ist ein Abenteuerpark im Herzen eines geschützten Waldes.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[58.5px] left-0 opacity-90 top-[264px] w-[607px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[18px] text-white top-0 w-[593px] whitespace-pre-wrap">Wir bieten den Bewohnern des Großraums Berlin sportliche Aktivitäten im Einklang mit der Natur.</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1cce7000} id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 24H20" id="Vector_2" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 29.3333H18.6667" id="Vector_3" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[68.25px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[22.75px] left-0 text-[14px] text-white top-[-1px] w-[473px] whitespace-pre-wrap">Unser qualifiziertes Team legt großen Wert auf Naturschutz und die Sicherheit aller Teilnehmer. Unser Park entspricht allen geltenden europäischen Normen, damit Sie sich sorgenfrei vergnügen können.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[16px] h-[118.25px] items-start left-0 pb-px pt-[25px] px-[25px] rounded-[16.4px] top-[354.5px] w-[607px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Icon2 />
      <Paragraph1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[472.75px] left-[80px] top-[80px] w-[607px]" data-name="Container">
      <Container10 />
      <Heading />
      <Paragraph />
      <Container11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[632.75px] left-0 overflow-clip top-0 w-[767px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function ImageAdventureParkRopesCourse() {
  return (
    <div className="absolute h-[632.75px] left-0 top-0 w-[767px]" data-name="Image (Adventure Park Ropes Course)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAdventureParkRopesCourse} />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#e87c46] h-[632.75px] left-0 top-0 w-[64px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute h-[632.75px] left-[767px] top-0 w-[767px]" data-name="Container">
      <ImageAdventureParkRopesCourse />
      <Container13 />
    </div>
  );
}

function Intro() {
  return (
    <div className="bg-[#e87c46] h-[632.75px] relative shrink-0 w-full" data-name="Intro">
      <Container7 />
      <Container12 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[727.97px] top-[2px] w-[78.047px]" data-name="Text">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#eec643] text-[14px] text-center tracking-[1.4px] uppercase">Abenteuer</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute font-['Oswald:Bold',sans-serif] font-bold h-[120px] leading-[60px] left-[16px] text-[60px] text-center text-white top-[32px] uppercase w-[1502px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute left-[751.52px] top-0">Erlebe Spaß mit unseren</p>
      <p className="-translate-x-1/2 absolute left-[751.41px] top-[60px]">exklusiven Erlebnissen</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[152px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Heading1 />
    </div>
  );
}

function ImageHupfburgenSpielplatz() {
  return (
    <div className="absolute h-[1022.656px] left-[767px] top-0 w-[767px]" data-name="Image (Hüpfburgen & Spielplatz)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHupfburgenSpielplatz} />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[448px]" data-name="Heading 3">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d2e] text-[30px] top-[-1px] uppercase">{`Hüpfburgen & Spielplatz`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[78px] left-0 top-[60px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#4a5565] text-[16px] top-0 w-[441px] whitespace-pre-wrap">Entwickelt für Kinder von 3 bis 12 Jahren. Beinhaltet verschiedene Hüpfburgen, einen zweistöckigen Spielplatz, Rutschen, Kletterwände und ein Bällebad. Ein sicherer Ort, an dem Kinder frei spielen können.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-[92.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#1a4d2e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[46.5px] text-[#1a4d2e] text-[14px] text-center top-[10px] uppercase">Preise</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[79px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1a4d2e] h-[40px] relative rounded-[4px] shrink-0 w-[119px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[47px] text-[14px] text-center text-white top-[10px] uppercase">Buchen</p>
        <Icon3 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[40px] items-start left-0 top-[170px] w-[448px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[45.5px] left-[24px] opacity-90 top-[32px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[22.75px] left-0 text-[14px] text-white top-[-1px] w-[392px] whitespace-pre-wrap">Kinder müssen immer Socken tragen. Die Aufsicht durch einen verantwortlichen Erwachsenen im umliegenden Bereich ist obligatorisch.</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#eec643] h-[24px] left-[24px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[-12px] w-[128.922px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1a4d2e] text-[12px] top-[4px] uppercase">Wie es funktioniert</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#e87c46] h-[101.5px] left-0 rounded-[10px] top-[242px] w-[448px]" data-name="Container">
      <Paragraph3 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[343.5px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
        <Paragraph2 />
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#fcfbf7] content-stretch flex flex-col h-[1022.656px] items-start justify-center left-0 pl-[159.5px] top-0 w-[767px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[1022.656px] relative shrink-0 w-full" data-name="Container">
      <ImageHupfburgenSpielplatz />
      <Container17 />
    </div>
  );
}

function ImageKletterwald() {
  return (
    <div className="absolute h-[527.656px] left-0 top-0 w-[767px]" data-name="Image (Kletterwald)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAdventureParkRopesCourse} />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[448px]" data-name="Heading 3">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d2e] text-[30px] top-[-1px] uppercase">Kletterwald</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[52px] left-0 top-[60px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#4a5565] text-[16px] top-0 w-[429px] whitespace-pre-wrap">Der Kletterwald bietet Parcours zwischen Plattformen in den Baumkronen. Überwinde deine Grenzen mit Hängebrücken, Netzen und Tunneln.</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-[92.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#1a4d2e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[46.5px] text-[#1a4d2e] text-[14px] text-center top-[10px] uppercase">Preise</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[79px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1a4d2e] h-[40px] relative rounded-[4px] shrink-0 w-[119px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[47px] text-[14px] text-center text-white top-[10px] uppercase">Buchen</p>
        <Icon4 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[40px] items-start left-0 top-[144px] w-[448px]" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[45.5px] left-[24px] opacity-90 top-[32px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[22.75px] left-0 text-[14px] text-white top-[-1px] w-[352px] whitespace-pre-wrap">Sicherheitsausrüstung (Gurt) inklusive. Einweisung obligatorisch. Parcours mit verschiedenen Schwierigkeitsgraden verfügbar.</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#eec643] h-[24px] left-[24px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[-12px] w-[128.922px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1a4d2e] text-[12px] top-[4px] uppercase">Wie es funktioniert</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#e87c46] h-[101.5px] left-0 rounded-[10px] top-[216px] w-[448px]" data-name="Container">
      <Paragraph5 />
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[317.5px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading3 />
        <Paragraph4 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#fcfbf7] content-stretch flex flex-col h-[527.656px] items-start justify-center left-[767px] pl-[159.5px] top-0 w-[767px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[527.656px] relative shrink-0 w-full" data-name="Container">
      <ImageKletterwald />
      <Container23 />
    </div>
  );
}

function ImageKlettern() {
  return (
    <div className="absolute h-[1204.469px] left-[767px] top-0 w-[767px]" data-name="Image (Klettern)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageKlettern} />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[448px]" data-name="Heading 3">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d2e] text-[30px] top-[-1px] uppercase">Klettern</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[78px] left-0 top-[60px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#4a5565] text-[16px] top-0 w-[400px] whitespace-pre-wrap">Unser Kletterturm verfügt über 4 Routen mit unterschiedlichen Schwierigkeitsgraden. Teste deine Kraft und Beweglichkeit in völliger Sicherheit.</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-[92.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#1a4d2e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[46.5px] text-[#1a4d2e] text-[14px] text-center top-[10px] uppercase">Preise</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[79px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#1a4d2e] h-[40px] relative rounded-[4px] shrink-0 w-[119px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[47px] text-[14px] text-center text-white top-[10px] uppercase">Buchen</p>
        <Icon5 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[40px] items-start left-0 top-[170px] w-[448px]" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[45.5px] left-[24px] opacity-90 top-[32px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[22.75px] left-0 text-[14px] text-white top-[-1px] w-[327px] whitespace-pre-wrap">{`Automatisches Sicherungssystem 'TruBlue'. Betreuung durch spezialisierte Monitore. Mindestgröße: 1,10m.`}</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#eec643] h-[24px] left-[24px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[-12px] w-[128.922px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1a4d2e] text-[12px] top-[4px] uppercase">Wie es funktioniert</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#e87c46] h-[101.5px] left-0 rounded-[10px] top-[242px] w-[448px]" data-name="Container">
      <Paragraph7 />
      <Container33 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[343.5px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading4 />
        <Paragraph6 />
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#fcfbf7] content-stretch flex flex-col h-[1204.469px] items-start justify-center left-0 pl-[159.5px] top-0 w-[767px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[1204.469px] relative shrink-0 w-full" data-name="Container">
      <ImageKlettern />
      <Container29 />
    </div>
  );
}

function ImagePaintball() {
  return (
    <div className="absolute h-[445px] left-[-15px] top-[0.47px] w-[797px]" data-name="Image (Paintball)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePaintball} />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[448px]" data-name="Heading 3">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d2e] text-[30px] top-[-1px] uppercase">Paintball</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[52px] left-0 top-[60px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#4a5565] text-[16px] top-0 w-[428px] whitespace-pre-wrap">Ein Schlachtfeld mitten im Wald. Verstecke dich hinter Bäumen, entwickle Strategien mit deinem Team und eliminiere die Gegner mit Farbkugeln.</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-[92.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#1a4d2e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[46.5px] text-[#1a4d2e] text-[14px] text-center top-[10px] uppercase">Preise</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[79px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#1a4d2e] h-[40px] relative rounded-[4px] shrink-0 w-[119px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[47px] text-[14px] text-center text-white top-[10px] uppercase">Buchen</p>
        <Icon6 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[40px] items-start left-0 top-[144px] w-[448px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[45.5px] left-[24px] opacity-90 top-[32px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[22.75px] left-0 text-[14px] text-white top-[-1px] w-[334px] whitespace-pre-wrap">Inklusive Markierer, Maske, Weste und 100 Bällen. Zusätzliche Nachfüllungen erhältlich. Mindestens 6 Teilnehmer.</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[#eec643] h-[24px] left-[24px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[-12px] w-[128.922px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1a4d2e] text-[12px] top-[4px] uppercase">Wie es funktioniert</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#e87c46] h-[101.5px] left-0 rounded-[10px] top-[216px] w-[448px]" data-name="Container">
      <Paragraph9 />
      <Container39 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[317.5px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading5 />
        <Paragraph8 />
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#fcfbf7] content-stretch flex flex-col h-[445.5px] items-start justify-center left-[767px] pl-[159.5px] top-0 w-[767px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[445.5px] relative shrink-0 w-full" data-name="Container">
      <ImagePaintball />
      <Container35 />
    </div>
  );
}

function ImageTrampoline() {
  return (
    <div className="absolute h-[511.328px] left-[767px] top-0 w-[767px]" data-name="Image (Trampoline)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTrampoline} />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[448px]" data-name="Heading 3">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d2e] text-[30px] top-[-1px] uppercase">Trampoline</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[52px] left-0 top-[60px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#4a5565] text-[16px] top-0 w-[436px] whitespace-pre-wrap">Springe, drehe dich und habe Spaß in unserer Trampolinzone. Eine Aktivität, um viel Energie loszuwerden!</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-[92.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#1a4d2e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[46.5px] text-[#1a4d2e] text-[14px] text-center top-[10px] uppercase">Preise</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[79px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#1a4d2e] h-[40px] relative rounded-[4px] shrink-0 w-[119px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-[47px] text-[14px] text-center text-white top-[10px] uppercase">Buchen</p>
        <Icon7 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[40px] items-start left-0 top-[144px] w-[448px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[45.5px] left-[24px] opacity-90 top-[32px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[22.75px] left-0 text-[14px] text-white top-[-1px] w-[378px] whitespace-pre-wrap">Sitzungen von 30 Minuten. Rutschfeste Socken sind Pflicht. Maximal 1 Person pro Trampolin.</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#eec643] h-[24px] left-[24px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[-12px] w-[128.922px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1a4d2e] text-[12px] top-[4px] uppercase">Wie es funktioniert</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#e87c46] h-[101.5px] left-0 rounded-[10px] top-[216px] w-[448px]" data-name="Container">
      <Paragraph11 />
      <Container45 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[317.5px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading6 />
        <Paragraph10 />
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[#fcfbf7] content-stretch flex flex-col h-[511.328px] items-start justify-center left-0 pl-[159.5px] top-0 w-[767px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[511.328px] relative shrink-0 w-full" data-name="Container">
      <ImageTrampoline />
      <Container41 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[3711.609px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container22 />
      <Container28 />
      <Container34 />
      <Container40 />
    </div>
  );
}

function Activities() {
  return (
    <div className="bg-[#1a4d2e] content-stretch flex flex-col gap-[80px] h-[4103.609px] items-start overflow-clip pt-[80px] relative shrink-0 w-full" data-name="Activities">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[192px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[256px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[464px] items-start left-0 top-[32px] w-[300px]" data-name="Container">
      <Image />
      <Image1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[256px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[192px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImageTrampoline} />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[496px] items-start left-[316px] top-0 w-[300px]" data-name="Container">
      <Image2 />
      <Image3 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[496px] relative shrink-0 w-[616px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#eec643] h-[24px] left-0 rounded-[4px] top-[2px] w-[70.969px]" data-name="Text">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#1a4d2e] text-[12px] top-[4px] uppercase">Gruppen</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[71px] items-start relative shrink-0 w-[175.641px]" data-name="Text">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[#e87c46] text-[48px] uppercase">WEG WAY</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[11px] items-start left-0 top-[-6px]">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[#1a4d2e] text-[48px] uppercase">Bei</p>
      <Text2 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[180px] left-0 top-[42px] w-[616px]" data-name="Heading 2">
      <Frame1 />
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[60px] left-0 text-[#1a4d2e] text-[48px] top-[-6px] uppercase w-[590px] whitespace-pre-wrap">{`                     kannst du dein Universum neu erschaffen – für die perfekte Party!`}</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[44px] relative shrink-0 w-[18.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#e87c46] text-[20px] top-0">01</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#1a4d2e] text-[14px] top-0 uppercase">Wähle die Aktivitäten</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-0">Wähle aus Kletterwald, Paintball, Klettern und vielem mehr.</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[44px] relative shrink-0 w-[298.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading8 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[16px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[44px] relative shrink-0 w-[21.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#e87c46] text-[20px] top-0">02</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#1a4d2e] text-[14px] top-0 uppercase">Definiere das Menü</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-0">Wir haben Catering-Optionen für jeden Geschmack und Bedarf.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[44px] relative shrink-0 w-[317.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading9 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[16px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[44px] relative shrink-0 w-[21.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#e87c46] text-[20px] top-0">03</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#1a4d2e] text-[14px] top-0 uppercase">Lade Freunde ein</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-0">Wir haben Platz für kleine Gruppen und große Events.</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[44px] relative shrink-0 w-[269.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading10 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[16px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[44px] relative shrink-0 w-[21.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#e87c46] text-[20px] top-0">04</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#1a4d2e] text-[14px] top-0 uppercase">Hab Spaß!</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] top-0">Unser Team kümmert sich um die Sicherheit und Animation.</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[44px] relative shrink-0 w-[302.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading11 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[16px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[248px] items-start left-0 top-[254px] w-[616px]" data-name="Container">
      <Container52 />
      <Container55 />
      <Container58 />
      <Container61 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[204.95px] size-[18px] top-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#1a4d2e] h-[48px] relative rounded-[6.8px] shrink-0 w-[254.953px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[24px] left-[114.5px] text-[16px] text-center text-white top-[12px] tracking-[0.4px] uppercase">Party-Pakete ansehen</p>
        <Icon8 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-start left-0 top-[542px] w-[616px]" data-name="Container">
      <Button12 />
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] h-[590px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
        <Heading7 />
        <Container51 />
        <Container64 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[48px] h-[590px] items-center left-[127px] top-[80px] w-[1280px]" data-name="Container">
      <Container47 />
      <Container50 />
    </div>
  );
}

function Container65() {
  return <div className="absolute bg-[#a8c66c] blur-[80px] left-[1406px] opacity-30 rounded-[33554400px] size-[256px] top-[-128px]" data-name="Container" />;
}

function Parties() {
  return (
    <div className="bg-[#fcfbf7] h-[750px] overflow-clip relative shrink-0 w-full" data-name="Parties">
      <Container46 />
      <Container65 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[722.5px] top-[2px] w-[57px]" data-name="Text">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#eec643] text-[14px] text-center tracking-[1.4px] uppercase">Galerie</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute font-['Oswald:Bold',sans-serif] font-bold h-[96px] leading-[48px] left-0 text-[48px] text-center text-white top-[32px] uppercase w-[1502px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute left-[751.11px] top-[-1px]">Momente der Freude</p>
      <p className="-translate-x-1/2 absolute left-[751.22px] top-[47px]">zum gemeinsamen Feiern!</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[128px] left-[16px] top-[80px] w-[1502px]" data-name="Container">
      <Text3 />
      <Heading12 />
    </div>
  );
}

function ImageSchulen() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[624px]" data-name="Image (Schulen)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[36px] relative shrink-0 w-[117.031px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[36px] left-0 text-[30px] text-white top-[-1px] tracking-[0.75px] uppercase">Schulen</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(0,0,0,0.8)] h-[400px] items-end left-0 pb-[32px] pl-[32px] to-[rgba(0,0,0,0)] top-0 w-[624px]" data-name="Container">
      <Heading13 />
    </div>
  );
}

function Container68() {
  return (
    <div className="col-[1] justify-self-stretch overflow-clip relative rounded-[16.4px] row-[1] self-stretch shrink-0" data-name="Container">
      <ImageSchulen />
      <Container69 />
    </div>
  );
}

function ImageFirmenUndGruppen() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[624px]" data-name="Image (Firmen und Gruppen)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[36px] relative shrink-0 w-[253.297px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[36px] left-0 text-[30px] text-white top-[-1px] tracking-[0.75px] uppercase">{`Firmen & Gruppen`}</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(0,0,0,0.8)] h-[400px] items-end left-0 pb-[32px] pl-[32px] to-[rgba(0,0,0,0)] top-0 w-[624px]" data-name="Container">
      <Heading14 />
    </div>
  );
}

function Container70() {
  return (
    <div className="col-[2] justify-self-stretch overflow-clip relative rounded-[16.4px] row-[1] self-stretch shrink-0" data-name="Container">
      <ImageFirmenUndGruppen />
      <Container71 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[400px] left-[127px] top-[272px] w-[1280px]" data-name="Container">
      <Container68 />
      <Container70 />
    </div>
  );
}

function Gallery() {
  return (
    <div className="bg-[#1a4d2e] h-[752px] relative shrink-0 w-full" data-name="Gallery">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[231.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a4d2e] text-[18px] top-px uppercase">Wie sind die Öffnungszeiten?</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #1A4D2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text4 />
      <Icon9 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[22.75px] opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pr-[32px] relative size-full">
          <p className="flex-[1_0_0] font-['Oswald:Regular',sans-serif] font-normal leading-[22.75px] min-h-px min-w-px relative text-[#1a4d2e] text-[14px] whitespace-pre-wrap">Wir sind täglich von 10:00 bis 18:00 Uhr im Winter und von 10:00 bis 20:00 Uhr im Sommer geöffnet. Wir empfehlen eine vorherige Reservierung.</p>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[8px] h-[91.75px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(26,77,46,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Button13 />
      <Paragraph16 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[370.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a4d2e] text-[18px] top-px uppercase">Was ist das Mindestalter für die Aktivitäten?</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #1A4D2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, #1A4D2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text5 />
      <Icon10 />
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[61px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(26,77,46,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Button14 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[361.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a4d2e] text-[18px] top-px uppercase">Ist eine Reservierung im Voraus notwendig?</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #1A4D2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, #1A4D2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text6 />
      <Icon11 />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[61px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(26,77,46,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Button15 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[186.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a4d2e] text-[18px] top-px uppercase">Was soll ich anziehen?</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #1A4D2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, #1A4D2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text7 />
      <Icon12 />
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[61px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(26,77,46,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Button16 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[306.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a4d2e] text-[18px] top-px uppercase">Veranstalten Sie Kindergeburtstage?</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #1A4D2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, #1A4D2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Button">
      <Text8 />
      <Icon13 />
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[61px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(26,77,46,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Button17 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[399.75px] items-start left-[596.33px] top-[80px] w-[810.672px]" data-name="Container">
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
      <Container77 />
    </div>
  );
}

function ImageFaqSupport() {
  return (
    <div className="absolute h-[596.856px] left-[8.27px] rounded-[16.4px] top-[8.27px] w-[409.459px]" data-name="Image (FAQ Support)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16.4px] size-full" src={imgImageFaqSupport} />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute bg-white h-[26.35px] left-[16.55px] rounded-[4px] top-[27.21px] w-[68.546px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[12.1px] text-[#1a4d2e] text-[12px] top-[4.42px] uppercase">Fragen?</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#1a4d2e] h-[613.405px] relative rounded-[16px] w-[426.008px]" data-name="Container">
      <ImageFaqSupport />
      <Container80 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="font-['Oswald:Bold',sans-serif] font-bold h-[60px] leading-[30px] relative shrink-0 text-[#1a4d2e] text-[30px] uppercase w-full" data-name="Heading 3">
      <p className="absolute left-0 top-[-1px]">Klären Sie</p>
      <p className="absolute left-0 top-[29px]">Ihre Fragen</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[19px] w-[160.797px]" data-name="Link">
      <p className="decoration-solid font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1a4d2e] text-[14px] underline">Kontaktieren Sie uns direkt.</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[40px] opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#1a4d2e] text-[14px] top-0">Nicht gefunden, was Sie suchen?</p>
      <Link6 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[116px] items-start left-0 top-[631.63px] w-[405.328px]" data-name="Container">
      <Heading15 />
      <Paragraph17 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[747.625px] left-[127px] top-[80px] w-[405.328px]" data-name="Container">
      <div className="absolute flex h-[627.981px] items-center justify-center left-[-10.33px] top-[-16.28px] w-[447.277px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "1644.59375" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.01deg]">
          <Container79 />
        </div>
      </div>
      <Container81 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-[#eec643] h-[907.625px] relative shrink-0 w-full" data-name="FAQ">
      <Container72 />
      <Container78 />
    </div>
  );
}

function Container82() {
  return <div className="absolute bg-[#a8c66c] blur-[100px] h-[576px] left-[319px] opacity-10 rounded-[33554400px] top-0 w-[896px]" data-name="Container" />;
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b0c500} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b0c500} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b0c500} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b0c500} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6679 14.048">
              <path d={svgPaths.p1416a00} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[16px] top-[8px] w-[80px]" data-name="Container">
      <Icon14 />
      <Icon15 />
      <Icon16 />
      <Icon17 />
      <Icon18 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[16px] left-[104px] top-[8px] w-[50.188px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[25.5px] text-[12px] text-center text-white top-0 uppercase">Exzellent</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[32px] left-[490.91px] rounded-[33554400px] top-0 w-[170.188px]" data-name="Container">
      <Container86 />
      <Text9 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[48px] left-0 top-[56px] w-[1152px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[48px] left-[576.02px] text-[48px] text-center text-white top-[-1px] uppercase">Feedback auf TripAdvisor</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Heading16 />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#a8c66c] relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#1a4d2e] text-[20px]">S</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white">Stefan M.</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_982)" id="Icon">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_982">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_982)" id="Icon">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_982">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_982)" id="Icon">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_982">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_982)" id="Icon">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_982">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_982)" id="Icon">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_982">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon19 />
      <Icon20 />
      <Icon21 />
      <Icon22 />
      <Icon23 />
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[36px] relative shrink-0 w-[61.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading17 />
        <Container92 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[33px] top-[33px] w-[494px]" data-name="Container">
      <Container90 />
      <Container91 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[78px] left-[33px] top-[105px] w-[494px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#d1d5dc] text-[16px] top-0 w-[494px] whitespace-pre-wrap">{`"Ein fantastischer Tag mit der Familie! Die Kinder liebten den Kletterwald und fühlten sich bei den Betreuern super sicher. Der Ort ist sehr schön und gepflegt. Wir kommen auf jeden Fall wieder!"`}</p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[479px] size-[48px] top-[33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.2">
          <path d={svgPaths.p2836b900} id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p2347a280} id="Vector_2" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#153e25] col-[1] justify-self-stretch relative rounded-[16px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container89 />
      <Paragraph18 />
      <Icon24 />
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#e87c46] relative rounded-[33554400px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-white">P</p>
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Oswald:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px relative text-[16px] text-white whitespace-pre-wrap">Petra R.</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_982)" id="Icon">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_982">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_982)" id="Icon">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_982">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_982)" id="Icon">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_982">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_982)" id="Icon">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_982">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0009 10.536">
              <path d={svgPaths.p2ed0980} fill="var(--fill-0, #EEC643)" id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon25 />
      <Icon26 />
      <Icon27 />
      <Icon28 />
      <Icon29 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[36px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading18 />
        <Container97 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[33px] top-[33px] w-[494px]" data-name="Container">
      <Container95 />
      <Container96 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[78px] left-[33px] top-[105px] w-[494px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[26px] left-0 text-[#d1d5dc] text-[16px] top-0 w-[476px] whitespace-pre-wrap">{`"Hervorragender Ort für Geburtstagsfeiern. Die Organisation war tadellos und die Kinder waren keine Sekunde still. Das Paintball war das Highlight des Tages für die Älteren."`}</p>
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[479px] size-[48px] top-[33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon" opacity="0.2">
          <path d={svgPaths.p2836b900} id="Vector" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p2347a280} id="Vector_2" stroke="var(--stroke-0, #EEC643)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[#153e25] col-[2] justify-self-stretch relative rounded-[16px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container94 />
      <Paragraph19 />
      <Icon30 />
    </div>
  );
}

function Container87() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[216px] relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Container93 />
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[384px] items-start left-[191px] top-[96px] w-[1152px]" data-name="Container">
      <Container84 />
      <Container87 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-[#1a4d2e] h-[576px] overflow-clip relative shrink-0 w-full" data-name="Testimonials">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[40px] relative shrink-0 w-[34.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative size-full text-[#eec643] text-[20px] text-center">
        <p className="-translate-x-1/2 absolute left-[17.5px] top-0">WEG</p>
        <p className="-translate-x-1/2 absolute left-[17.48px] top-[20px]">WAY</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute bg-[#1a4d2e] content-stretch flex items-center justify-center left-0 rounded-[33554400px] size-[96px] top-0" data-name="Container">
      <Text10 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[45.5px] left-0 opacity-80 top-[120px] w-[284px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#1a4d2e] text-[14px] top-[-1px] w-[270px] whitespace-pre-wrap">Abenteuer, Natur und Spaß in Berlin, Grunewald. Dein Lieblingspark.</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3c358280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#1a4d2e] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_929)" id="Icon">
          <path d={svgPaths.p299a6200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3cad6d80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.125 4.875H13.1325" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_929">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[#1a4d2e] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[40px] items-start left-0 top-[189.5px] w-[284px]" data-name="Container">
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container99() {
  return (
    <div className="col-[1] justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container100 />
      <Paragraph20 />
      <Container101 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a4d2e] text-[18px] top-px uppercase">Entdecken</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[-1px] w-[57.828px]" data-name="Link">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1a4d2e] text-[14px] uppercase">Der Park</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[-1px] w-[70.703px]" data-name="Link">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1a4d2e] text-[14px] uppercase">Aktivitäten</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[-1px] w-[39.063px]" data-name="Link">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1a4d2e] text-[14px] uppercase">Feiern</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[-1px] w-[52.172px]" data-name="Link">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1a4d2e] text-[14px] uppercase">Schulen</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-[-1px] w-[85.359px]" data-name="Link">
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1a4d2e] text-[14px] uppercase">Teambuilding</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link13 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start opacity-80 relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container102() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Heading19 />
      <List />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a4d2e] text-[18px] top-px uppercase">Kontakt</p>
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-0 size-[18px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_926)" id="Icon">
          <path d={svgPaths.p3302df00} id="Vector" stroke="var(--stroke-0, #E87C46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_926">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 opacity-60 top-[22px] w-[113.641px]" data-name="Text">
      <p className="font-['Oswald:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1a4d2e] text-[12px]">(Mobilfunknetz / Festnetz)</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[40px] left-[30px] top-0 w-[113.641px]" data-name="Text">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a4d2e] text-[14px] top-0">+49 30 12345678</p>
      <Text12 />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Icon33 />
      <Text11 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-0 size-[18px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p97bb7c0} id="Vector" stroke="var(--stroke-0, #E87C46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1b122e80} id="Vector_2" stroke="var(--stroke-0, #E87C46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[20px] left-[30px] top-0 w-[90.875px]" data-name="Text">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a4d2e] text-[14px] top-0">hallo@wegway.de</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Icon34 />
      <Text13 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-0 size-[18px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p625a980} id="Vector" stroke="var(--stroke-0, #E87C46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18c84c80} id="Vector_2" stroke="var(--stroke-0, #E87C46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute font-['Oswald:Regular',sans-serif] font-normal h-[40px] leading-[20px] left-[30px] text-[#1a4d2e] text-[14px] top-0 w-[64.453px]" data-name="Text">
      <p className="absolute left-0 top-0">Grunewald,</p>
      <p className="absolute left-0 top-[20px]">14193 Berlin</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Icon35 />
      <Text14 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[134px] items-start opacity-80 relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container103() {
  return (
    <div className="col-[3] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Heading20 />
      <List1 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1a4d2e] text-[18px] top-px uppercase">Newsletter</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[20px] opacity-80 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a4d2e] text-[14px] top-0">Erhalte Neuigkeiten und exklusive Angebote.</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-bl-[6.8px] rounded-tl-[6.8px]" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Oswald:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(26,77,46,0.5)]">Deine E-Mail</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-bl-[6.8px] rounded-tl-[6.8px]" />
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#1a4d2e] h-[42px] relative rounded-br-[6.8px] rounded-tr-[6.8px] shrink-0 w-[50.453px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[24px] left-[25.5px] text-[16px] text-center text-white top-[9px]">OK</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex h-[42px] items-start relative shrink-0 w-full" data-name="Form">
      <EmailInput />
      <Button18 />
    </div>
  );
}

function Container104() {
  return (
    <div className="col-[4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-[1] self-stretch shrink-0" data-name="Container">
      <Heading21 />
      <Paragraph21 />
      <Form />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute gap-[48px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[229.5px] left-[127px] top-[88px] w-[1280px]" data-name="Container">
      <Container99 />
      <Container102 />
      <Container103 />
      <Container104 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[228.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#1a4d2e] text-[12px] top-0 uppercase">© 2026 WEG WAY. HERR KELVIN EDIMEH.</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#1a4d2e] text-[12px] top-0 uppercase">Datenschutz</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20.5px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#1a4d2e] text-[12px] top-0 uppercase">AGB</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[59.125px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#1a4d2e] text-[12px] top-0 uppercase">Impressum</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[16px] relative shrink-0 w-[195.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Link14 />
        <Link15 />
        <Link16 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex h-[49px] items-center justify-between left-[32px] opacity-60 pt-px top-[381.5px] w-[1470px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(26,77,46,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph22 />
      <Container106 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#fcfbf7] h-[470.5px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#eec643] border-solid border-t-8 inset-0 pointer-events-none" />
      <Container98 />
      <Container105 />
    </div>
  );
}

function FunParqueHome() {
  return (
    <div className="absolute bg-[#fcfbf7] content-stretch flex flex-col h-[9182.484px] items-start left-0 top-0 w-[1534px]" data-name="FunParqueHome">
      <Hero />
      <Intro />
      <Activities />
      <Parties />
      <Gallery />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default function WegWay() {
  return (
    <div className="bg-white relative size-full" data-name="WEG WAY">
      <Navbar />
      <FunParqueHome />
    </div>
  );
}