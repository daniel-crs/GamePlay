import { ImageSourcePropType } from 'react-native';

import apexIcon from '../../assets/match/Apex.png';
import csGoIcon from '../../assets/match/CsGo.png';
import lolIcon from '../../assets/match/Lol.png';
import redDeadIcon from '../../assets/match/RedDead.png';
import valorantIcon from '../../assets/match/Valorant.png';

export type ServerRole = 'Administrador' | 'Convidado';

export type Server = {
  id: string;
  title: string;
  role: ServerRole;
  icon: ImageSourcePropType;
};

export const servers: Server[] = [
  {
    id: '1',
    title: 'Rumo ao topo',
    role: 'Administrador',
    icon: csGoIcon,
  },
  {
    id: '2',
    title: 'Bora queimar tudo',
    role: 'Administrador',
    icon: apexIcon,
  },
  {
    id: '3',
    title: 'Yeah, boy',
    role: 'Convidado',
    icon: redDeadIcon,
  },
  {
    id: '4',
    title: 'Valorosos',
    role: 'Convidado',
    icon: valorantIcon,
  },
  {
    id: '5',
    title: 'Lendários',
    role: 'Administrador',
    icon: lolIcon,
  },
  {
    id: '6',
    title: 'Sindicato',
    role: 'Convidado',
    icon: lolIcon,
  },
];
