export interface IUser {
  uid?: number;
  utorid?: string;
  last?: string;
  first?: string;
  name?: string;
  gender?:string;
  email?: string;
  branch?: string;
  about?: string;
  tag?: string;
  tags?: any[];
  areas?: IOption[];
  views?: number;
  linkedin?: string;
  status?: number;
  created?: Date;
  modified?: Date;
  modified_str?: string;
  team?: ITeam;
  project?: IProject;
  uliked?: IUser[];
  tliked?: ITeam[];
  pliked?: IProject[];

  s_str?:string;
  s_name?:string;
}

export interface ITeam {
  tid?: number;
  oid?: number;
  owner?: string;
  mates?: any[];
  size?: number;
  name?: string;
  created?: Date;
  modified?: Date;
  modified_str?: string;
  about?: string;
  skills?: any[];
  status?: number;
  pref?: any[];
  views?: number;
  cloud?: string;
  email?: string;
  magictoken?: number;
  areas?: IOption[];
  tag?: string;
  tags?: any[];
  project?: IProject[];

  s_str?:string;
  s_name?:string;
}

export interface IProject {
  pid?: number;
  oid?: number;
  owner?: string;
  teams?: ITeam[];
  size?: IOption[];
  name?: string;
  email?: string;
  created?: Date;
  created_str?: string;
  modified?: Date;
  modified_str?: string;
  magictoken?: number;
  abs?: string;
  about?: string;
  tag?: string;
  tags?: any[];
  areas?: IOption[];
  status?: IOption[];
  pref?: any[];
  views?: number;
  
  s_str?:string;
  s_name?:string;
}

export interface IExperience {
  company?: string;
  title?: string;
  date?: string;
}

export interface IAreas {

  'Photonics'?: boolean;
  'Semiconductor'?: boolean;
  'Electromagnetics'?: boolean;
  'Energy'?: boolean;
  'Analog'?: boolean;
  'Digital'?: boolean;
  'Control'?: boolean;
  'Communication'?: boolean;
  'Signal'?: boolean;
  'Hardware'?: boolean;
  'Software'?: boolean;
  'Network'?: boolean;

}

export interface IOption {
  label?: string;
  value?: boolean;
}