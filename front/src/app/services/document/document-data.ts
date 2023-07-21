import { Document } from "./document.model";

export const documentData: Document[] = [
  {
    documentId: 1,
    title: "Une vie",
    author: "Simone Veil",
    releaseDate: new Date(2007, 0, 1),
    available: false,
    registrationDate: new Date(2020, 0, 1),
    documentType: "Livre",
  },
  {
    documentId: 2,
    title: "Bel–Ami",
    author: "Guy de Maupassant",
    releaseDate: new Date(1885, 0, 1),
    available: true,
    registrationDate: new Date(2020, 0, 1),
    documentType: "Livre",
  },
  {
    documentId: 3,
    title: "L’Appel de la forêt",
    author: "Jack London",
    releaseDate: new Date(1903, 0, 1),
    available: true,
    registrationDate: new Date(2020, 0, 1),
    documentType: "Livre",
  },
  {
    documentId: 4,
    title: "Des fleurs pour Algernon ",
    author: "Daniel Keyes",
    releaseDate: new Date(1959, 0, 1),
    available: false,
    registrationDate: new Date(2020, 0, 1),
    documentType: "Livre",
  },
];
