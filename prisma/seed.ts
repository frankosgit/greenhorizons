import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "Steg Lyft 15.5",
        description: "Steg Lyft 15.5m Stege med lyft 15.5m klarar last på 150kg Designad för att lyfta solcellspaneler",
        url: "https://gronhorisont.se/____impro/1/onewebmedia/Camac.jpg?etag=%227470-65156341%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=263%2B148&extract=56%2B0%2B137%2B148&quality=85",
        stock: true,
        priceOnQuote: true,
        category: "lifting",
        company: "Camac"
      },
    });
    await prisma.products.create({
        data: {
          title: "Steg Lyft 20",
          description: "Stege med lyft 20m klarar last på 200kg Designad för att lyfta solcellspaneler.",
          url: "https://gronhorisont.se/____impro/1/onewebmedia/Camac.jpg?etag=%227470-65156341%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=263%2B148&extract=56%2B0%2B137%2B148&quality=85",
          stock: true,
          priceOnQuote: true,
          category: "lifting",
          company: "Camac"
        },
      });
      await prisma.products.create({
        data: {
          title: "Unik Steglyft",
          description: "Specialdesignad för solcellspaneler klarar last på 100kg kan fästas på ett flertal stegar Kräver ingen el, dras med hjälp av skruvdragare klarar höjder upp till 12.5m",
          url: "https://gronhorisont.se/____impro/1/onewebmedia/Minor%20Ladder_hoist_Driver%20100.jpg?etag=%222fd83-651567f1%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=137%2B172&extract=0%2B6%2B137%2B148&quality=85",
          stock: true,
          priceOnQuote: true,
          category: "lifting",
          company: "Camac"
        },
      });
      await prisma.products.create({
        data: {
          title: "Hitouch 5 HN18-54H 395-415W",
          description: "MONO PERC Modul med hög effektivitet 21.25% Maximal effektivitet 12 ÅR Produktgaranti",
          url: "https://gronhorisont.se/____impro/1/onewebmedia/Handersun/5/HN18-54H.jpg?etag=%221c3509-650854e7%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=137%2B194&extract=0%2B12%2B137%2B148&quality=85",
          stock: true,
          priceOnQuote: true,
          category: "solarPanel",
          company: "Handersun"
        },
      });
      await prisma.products.create({
        data: {
          title: "Hitouch 5HN18-54HB 385-405W",
          description: "Full Black Modul med hög effektivitet 21.74% Maximal effektivitet 12 ÅR Produktgaranti",
          url: "https://gronhorisont.se/__https://gronhorisont.se/____impro/1/onewebmedia/Handersun/5/HN18-54HB.jpg?etag=%2213703f-650854e8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=137%2B194&extract=0%2B14%2B137%2B148&quality=85__impro/1/onewebmedia/Camac.jpg?etag=%227470-65156341%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=263%2B148&extract=56%2B0%2B137%2B148&quality=85",
          stock: true,
          priceOnQuote:true,
          category: "solarPanel",
          company: "Handersun"
        },
      });
      await prisma.products.create({
        data: {
          title: "Hitouch 5HN18-54HT 395-415W",
          description: "MONO PERC Bifacial Module 21.25% Maximal effektivitet 15 ÅR Produktgaranti",
          url: "https://gronhorisont.se/____impro/1/onewebmedia/Handersun/5/HN18-54HT.jpg?etag=%222abb93-650854eb%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=137%2B194&extract=0%2B13%2B137%2B148&quality=85",
          stock: true,
          category: "solarPanel",
          company: "Handersun"
        },
      });
      await prisma.products.create({
        data: {
          title: "iFIX OW Base",
          description: "Utan förmonterade byggnadsskyddsmattor Produktnummer 102211",
          url: "https://gronhorisont.se/____impro/1/voestalpine/Bilder/102211_iFIX%20EW%20Base.jpg?etag=%221a5de-6502b38a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=156%2B156&quality=85",
          stock: true,
          priceOnQuote: true,
          category: "mountung",
          company: "Voestalpine"
        },
      });
      await prisma.products.create({
        data: {
          title: "iFIX OW Protect",
          description: "med förmonterade byggnadsskyddsmattor, för tak med fast isolering. Produktnummer 102212",
          url: "https://gronhorisont.se/____impro/1/voestalpine/Bilder/102221-102222_iFIX%20EW%20Protect+Alu-Protect.jpg?etag=%2266838-6502b38a%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=156%2B189&extract=0%2B0%2B156%2B156&quality=85",
          stock: true,
          priceOnQuote: true,
          category: "mounting",
          company: "Voestalpine"
        },
      });
      await prisma.products.create({
        data: {
          title: "iFIX OW Alu- Protect",
          description: "Med förmonterad aluminiumlaminerade skyddsmattor, för tak med fast isolering 102222",
          url: "https://gronhorisont.se/____impro/1/voestalpine/Bilder/102131-102132_iFIX%20Base%20Protect+Alu-Protect.jpg?etag=%22e7d6-6502b388%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=156%2B156&quality=85",
          stock: true,
          priceOnQuote: true,
          category: "mounting",
          company: "Voestalpine"
        },
      });
      await prisma.products.create({
        data: {
          title: "NanoMount",
          description: "NanoMount black K50063-Bk1 Mått (i mm): Bredd: 101.6 Höjd:87.6 Djup: 10.0",
          url: "https://gronhorisont.se/____impro/1/Sunmodo/Bilder/K50063-BK1.jpg?etag=%22c2ec0-650aac29%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=202%2B148&extract=25%2B0%2B137%2B148&quality=85",
          stock: true,
          priceOnQuote: true,
          category: "mounting",
          company: "Sunmodo"
        },
      });
      await prisma.products.create({
        data: { title: "SMR100 Rail", description: "Mill Finish, 4260mm A20422-4260-ML Material Aluminium 6005-T5 Vikt 0.614 kg/m Högsta Draghållfasthet 260 MPa Flytgräns 240 Mpa Sektionsegenskaper SX: 3.21 cm³ SY: 2.39 cm³",
          url: "https://gronhorisont.se/____impro/1/Sunmodo/Bilder/A20422-XXX-ML.jpg?etag=%221245d8-650aac14%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=202%2B148&extract=53%2B0%2B137%2B148&quality=85",
          stock: true,
          priceOnQuote: true,
          category: "mounting",
          company: "Sunmodo"
        },
      });
      await prisma.products.create({
        data: { title: "SMR100 Rail", description: "Black Anodized, 4260 mm A20422-4260-BK Material Aluminium 6005-T5 Vikt 0.614 kg/m Högsta Draghållfasthet 260 MPa Flytgräns 240 Mpa Sektionsegenskaper SX: 3.21 cm³ SY: 2.39 cm³",
          url: "https://gronhorisont.se/____impro/1/Sunmodo/Bilder/A20422-XXX-BK.jpg?etag=%22d73b8-650aac14%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=202%2B148&extract=56%2B0%2B137%2B148&quality=85",
          stock: true,
          priceOnQuote: true,
          category: "mounting",
          company: "Sunmodo"
        },
      });
    // Add other product entries similarly

  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();