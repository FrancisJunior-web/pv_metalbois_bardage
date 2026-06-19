import type { EtatSurface, Form, Participant, Points, PV, Releves } from "./types";

export const AVATAR_COLORS = ["#D32F2F", "#1565C0", "#2E7D32", "#6A1B9A", "#E65100", "#00695C"];

export const CURRENT_USER = {
  name: "Jean Dupont",
  role: "Conducteur de Travaux",
  email: "j.dupont@smac-sa.com",
  agence: "Agence Nantes",
};

export const AGENCES: string[] = [
  "Alsace - Bourgogne - Franche Comté",
  "Aquitaine",
  "Auralp",
  "Auvergne Rhône-Alpes - Enveloppe",
  "Bretagne",
  "Centre-Maine",
  "Gennevilliers",
  "Haut de France",
  "IDF Enveloppe",
  "IDF Etanchéité",
  "Industries",
  "Limousin Berry",
  "Lorraine - Champagne-Ardennes",
  "Normandie",
  "Occitanie",
  "Océan Indien",
  "PACA",
  "Paris",
  "Pays de Loire",
  "Poitou-Charentes",
  "SIEGE SMAC",
];

export const ETABLISSEMENTS: string[] = [
  "SMAC AIX EN PROVENCE",
  "SMAC AMIENS",
  "SMAC ANGERS",
  "SMAC ANGOULEME",
  "SMAC ANNECY",
  "SMAC Antony",
  "SMAC BAYONNE",
  "SMAC BESANCON",
  "SMAC BIOT",
  "SMAC BLOIS",
  "SMAC BORDEAUX",
  "SMAC BOURGES",
  "SMAC BREST",
  "SMAC BRIVE",
  "SMAC CHALONS SUR SAONE",
  "SMAC CHATEAUROUX",
  "SMAC CHERBOURG",
  "SMAC CLERMONT FERRAND",
  "SMAC DIJON",
  "SMAC DUNKERQUE",
  "SMAC GENNEVILLIERS",
  "SMAC GRENOBLE",
  "SMAC LA ROCHE SUR YON",
  "SMAC LA ROCHELLE",
  "SMAC LE HAVRE",
  "SMAC LE MANS",
  "SMAC LIMOGES",
  "SMAC LORIENT",
  "SMAC MAYOTTE",
  "SMAC METZ",
  "SMAC MONTPELLIER",
  "SMAC MULHOUSE",
  "SMAC NANCY",
  "SMAC NANTES",
  "SMAC NORD",
  "SMAC Normandie Caen",
  "SMAC Normandie Rouen",
  "SMAC OCEAN INDIEN",
  "SMAC ORLEANS",
  "SMAC PARIS",
  "SMAC PAU",
  "SMAC PERPIGNAN",
  "SMAC PIERRELATTE",
  "SMAC POITIERS",
  "SMAC Paris Nord 2.",
  "SMAC REIMS",
  "SMAC RENNES",
  "SMAC SAINT ETIENNE",
  "SMAC SAINT NAZAIRE",
  "SMAC SAINT PRIEST",
  "SMAC SIEGE",
  "SMAC STRASBOURG",
  "SMAC TOULOUSE",
  "SMAC TOURS",
  "SMAC TROYES",
  "SMAC VAULX EN VELIN",
  "SMAC YFFINIAC",
  "USINE LIMOGES",
  "USINE RENNES",
  "USINE SAINT PIERRE DES CORPS",
  "USINE VENISSIEUX",
];

export const INITIAL_FORM: Form = {
  agence: "",
  email1: "",
  email2: "",
  etablissement: "",
  chantier: "",
  zone: "",
  responsable: "",
  planReperage: "",
  date: "",
};

export const INITIAL_ETAT_SURFACE: EtatSurface = {
  reg1: "SO",   reg1Photos: [],  reg1Comment: "",
  prop1: "SO",  prop1Photos: [], prop1Comment: "",
  reg2: "SO",   reg2Photos: [],  reg2Comment: "",
  prop2: "SO",  prop2Photos: [], prop2Comment: "",
};

export const INITIAL_RELEVES: Releves = {
  support: "SO",
  hauteur: "SO",
  numbreetposition: "SO",
  dimensions: "SO",
};

export const INITIAL_POINTS: Points = {
  chevchassis: "SO",
  Chevetresporte: "SO",
  chevSorties: "SO",
  feuilluresdanslesangles: "SO",
  joints: "SO",
  observations: "",
};

export const INITIAL_PARTICIPANT: Omit<Participant, "id"> = {
  nom: "",
  titre: "",
  signed: false,
  sigDataUrl: null,
  reception: "OUI",
  miseEnConformite: "",
  email: "",
  autoEmail: false,
};

export const INITIAL_PARTICIPANTS: Participant[] = [
  { id: 1, ...INITIAL_PARTICIPANT },
];

export const SURFACE_FIELDS: [string, string][] = [
  ["reg1", "Appuis de charpente niveaux"],
  ["prop1", "Régularité du support"],
  ["reg2", "Propreté du support"],
  ["prop2", "Peinture charpente"],
];

export const PARTIE_COURANTE_FIELDS: [string, string][] = [
  ["calage", "Calage charpente"],
  ["Entraxepoteaux", "Entraxe et alignement poteaux"],
  ["Entraxesecondaire", "Entraxe et alignement ossature secondaire"],
  ["Alignemententrepoteaux", "Alignement entre poteaux et longrine"],
  ["niveauxdepart", "Niveau de départ / niveau longrine"],
  ["appuisdanslesangles", "Appui dans les angles"],
  
];

export const INITIAL_PARTIE_COURANTE = {
  calage: "SO",
  Entraxepoteaux: "SO",
  Entraxesecondaire: "SO",
  Alignemententrepoteaux: "SO",
  niveauxdepart: "SO",
  appuisdanslesangles: "SO",
  
};

export const RELEVES_FIELDS: [string, string][] = [
  ["numbreetposition", "Nombre et position"],
  ["dimensions", "Dimension"],
];

export const POINT_FIELDS: [string, string][] = [
  ["chevchassis", "Chevêtres châssis"],
  ["Chevetresporte", "Chevêtres portes"],
  ["chevSorties", "Chevêtres sorties / pénétrations"],
  ["feuilluresdanslesangles", "Feuillures dans les angles"],
  ["joints", "Joints de dilation"],
];

export const SAMPLE_PVS: PV[] = [];
