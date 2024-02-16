//import { v4 as uuidv4 } from 'uuid';
import Miniatura from "../assets/thumbnail-1.png";

const productosList = [
  {
      "id": "6a479166-5b55-4860-867f-27ffc5c0127a",
      "categoriaId": "0e90580c-e022-49ea-aacd-c693220020af",
      "titulo": "Placas bases 'A'",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 618,
          "venta": 696
      }
  },
  {
      "id": "972116ae-6fe4-42cb-a37b-54887ee4d43f",
      "categoriaId": "f8b59a8d-fd77-4932-bc31-f33949a0f89e",
      "titulo": "Tarjetas de video",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 420,
          "venta": 480
      }
  },
  {
      "id": "119e93a5-f3b7-4c61-b68c-08a2402ce030",
      "categoriaId": "7d478e94-f57d-4648-907d-4b9e7dc4a1cf",
      "titulo": "Procesadores antiguos",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 250,
          "venta": 300
      }
  },
  {
      "id": "059864c5-9b93-4762-be0c-5b2cdf715d93",
      "categoriaId": "24e761e6-fdf7-4c49-a42d-19b6c15d97bb",
      "titulo": "Memorias RAM DDR3",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 80,
          "venta": 100
      }
  },
  {
      "id": "96e24033-217d-4029-b4d2-c7049e6acaa3",
      "categoriaId": "164ef367-e010-4b3f-bc0d-72587a6f3aa5",
      "titulo": "Discos duros SATA",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 50,
          "venta": 70
      }
  },
  {
      "id": "e9dcf04f-7930-4273-a3ef-5d2bd4f51e31",
      "categoriaId": "45bb34bf-6d23-4259-86da-935965f5ef7a",
      "titulo": "Fuentes de poder usadas",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 30,
          "venta": 45
      }
  },
  {
      "id": "bc93a196-cc2d-4db5-aa00-77c82658ae1c",
      "categoriaId": "ffbe03bf-d12e-4e24-a76c-e65ce7c1c357",
      "titulo": "Teclados y ratones USB",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 15,
          "venta": 25
      }
  },
  {
      "id": "e08466cd-a24d-4f8f-b8ce-0d5a0bd66835",
      "categoriaId": "a6ba792c-5350-4766-a50e-4edc8ce3b8d8",
      "titulo": "Cables y conectores",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 5,
          "venta": 10
      }
  },
  {
      "id": "9d9f1147-a8ce-423d-a8ae-d7a689b686a1",
      "categoriaId": "f8b59a8d-fd77-4932-bc31-f33949a0f89e",
      "titulo": "Placas madre dañadas",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 15,
          "venta": 20
      }
  },
  {
      "id": "1c030d77-41cc-423b-b5c2-c84f81952d0f",
      "categoriaId": "7d478e94-f57d-4648-907d-4b9e7dc4a1cf",
      "titulo": "Monitores LCD averiados",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 40,
          "venta": 55
      }
  },
  {
      "id": "9c9e4d3d-16ff-4ee5-8bce-9abbfa1923bd",
      "categoriaId": "24e761e6-fdf7-4c49-a42d-19b6c15d97bb",
      "titulo": "Impresoras sin funcionar",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 25,
          "venta": 35
      }
  },
  {
      "id": "867e6c7e-1e57-4e8e-ac31-c15555e89b42",
      "categoriaId": "164ef367-e010-4b3f-bc0d-72587a6f3aa5",
      "titulo": "Móviles antiguos",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 30,
          "venta": 40
      }
  },
  {
      "id": "abdf08c1-80a8-4c42-afe2-eee3a48a34c7",
      "categoriaId": "45bb34bf-6d23-4259-86da-935965f5ef7a",
      "titulo": "Baterías recargables",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 8,
          "venta": 15
      }
  },
  {
      "id": "0f27c6f8-1be5-4b9b-a832-f2e7ebf3f07f",
      "categoriaId": "ffbe03bf-d12e-4e24-a76c-e65ce7c1c357",
      "titulo": "Cámaras web usadas",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 12,
          "venta": 18
      }
  },
  {
      "id": "17f120ba-3d98-4105-9df4-b025d3150e7e",
      "categoriaId": "a6ba792c-5350-4766-a50e-4edc8ce3b8d8",
      "titulo": "Altavoces y auriculares defectuosos",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 10,
          "venta": 15
      }
  },
  {
      "id": "24b41d06-98d3-44c2-b59a-487e7608a319",
      "categoriaId": "a6ba792c-5350-4766-a50e-4edc8ce3b8d8",
      "titulo": "Laptops viejas",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 120,
          "venta": 150
      }
  },
  {
      "id": "b0e78ad4-c9c0-4b96-8e3f-2e9ad3435134",
      "categoriaId": "a6ba792c-5350-4766-a50e-4edc8ce3b8d8",
      "titulo": "Tablets con problemas",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 50,
          "venta": 65
      }
  },
  {
      "id": "e13e8aaf-7c81-4e8e-8729-f7de3712fa58",
      "categoriaId": "a6ba792c-5350-4766-a50e-4edc8ce3b8d8",
      "titulo": "Reproductores de DVD estropeados",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 8,
          "venta": 12
      }
  },
  {
      "id": "5d3324cc-cdeb-44d3-8271-bc64493d406d",
      "categoriaId": "24e761e6-fdf7-4c49-a42d-19b6c15d97bb",
      "titulo": "Dispositivos GPS antiguos",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 15,
          "venta": 22
      }
  },
  {
      "id": "d525683b-8109-442b-bb7c-091605a54d5f",
      "categoriaId": "164ef367-e010-4b3f-bc0d-72587a6f3aa5",
      "titulo": "Circuitos electrónicos dañados",
      imagenes: [
        Miniatura,
        Miniatura,
        Miniatura,
      ],
      "precio": {
          "compra": 5,
          "venta": 8
      }
  }
];

  export default productosList;