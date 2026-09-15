import { ImageSourcePropType } from 'react-native';

import apexIcon from '../../assets/match/Apex.png';
import csGoIcon from '../../assets/match/CsGo.png';
import lolIcon from '../../assets/match/Lol.png';
import redDeadIcon from '../../assets/match/RedDead.png';
import valorantIcon from '../../assets/match/Valorant.png';
import funIcon from '../../assets/slider/Diversao.png';
import duelIcon from '../../assets/slider/Duelo.png';
import rankedIcon from '../../assets/slider/Ranqueada.png';

export type CategoryId = 'ranked' | 'duel' | 'fun';

export type Category = {
  id: CategoryId;
  title: string;
  icon: ImageSourcePropType;
};

export type MatchRole = 'Anfitrião' | 'Visitante';

export type Match = {
  id: string;
  title: string;
  game: string;
  date: string;
  categoryId: CategoryId;
  role: MatchRole;
  icon: ImageSourcePropType;
};

export const categories: Category[] = [
  {
    id: 'ranked',
    title: 'Ranqueada',
    icon: rankedIcon,
  },
  {
    id: 'duel',
    title: 'Duelo 1x1',
    icon: duelIcon,
  },
  {
    id: 'fun',
    title: 'Diversão',
    icon: funIcon,
  },
];

export const matches: Match[] = [
  {
    id: '1',
    title: 'Lendários',
    game: 'LoL',
    date: '18/06 às 21:00h',
    categoryId: 'ranked',
    role: 'Anfitrião',
    icon: lolIcon,
  },
  {
    id: '2',
    title: 'Yeah, boy',
    game: 'Red Dead',
    date: '23/06 às 19:00h',
    categoryId: 'fun',
    role: 'Visitante',
    icon: redDeadIcon,
  },
  {
    id: '3',
    title: 'Rumo ao topo',
    game: 'CS:GO',
    date: '20/06 às 09:00h',
    categoryId: 'duel',
    role: 'Anfitrião',
    icon: csGoIcon,
  },
  {
    id: '4',
    title: 'Bora queimar tudo',
    game: 'Apex',
    date: '20/06 às 14:20h',
    categoryId: 'ranked',
    role: 'Anfitrião',
    icon: apexIcon,
  },
  {
    id: '5',
    title: 'Valorosos',
    game: 'Valorant',
    date: '21/06 às 22:00h',
    categoryId: 'fun',
    role: 'Visitante',
    icon: valorantIcon,
  },
  {
    id: '6',
    title: 'Sindicato',
    game: 'LoL',
    date: '22/06 às 19:30h',
    categoryId: 'duel',
    role: 'Visitante',
    icon: lolIcon,
  },
];
