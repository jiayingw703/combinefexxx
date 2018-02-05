export interface IUser {
  uid?: number;
  u_utorid?: string;
  u_last?: string;
  u_first?: string;
  u_name?: string;
  u_email?: string;
  u_branch?: string;
  u_about?: string;
  u_tag?: string;
  u_tags?: any[];
  u_areas?: IOption[];
  u_views?: number;
  u_linkedin?: string;
  u_status?: number;
  u_created?: Date;
  u_modified?: Date;
  u_modified_str?: string;
  u_team?: ITeam;
  u_project?: IProject;
  u_uliked?: IUser[];
  u_tliked?: ITeam[];
  u_pliked?: IProject[];

  s_str?:string;
  s_name?:string;
}

export interface ITeam {
  tid?: number;
  oid?: number;
  t_owner?: string;
  t_mates?: any[];
  t_size?: number;
  t_name?: string;
  t_created?: Date;
  t_modified?: Date;
  t_modified_str?: string;
  t_about?: string;
  t_skills?: any[];
  t_status?: number;
  t_pref?: any[];
  t_views?: number;
  t_cloud?: string;
  t_email?: string;
  t_magictoken?: number;
  t_areas?: IOption[];
  t_tag?: string;
  t_tags?: any[];
  t_project?: IProject[];

  s_str?:string;
  s_name?:string;
}

export interface IProject {
  pid?: number;
  oid?: number;
  p_owner?: string;
  p_teams?: ITeam[];
  p_size?: IOption[];
  p_name?: string;
  p_email?: string;
  p_created?: Date;
  p_created_str?: string;
  p_modified?: Date;
  p_modified_str?: string;
  p_magictoken?: number;
  p_abs?: string;
  p_about?: string;
  p_tag?: string;
  p_tags?: any[];
  p_areas?: IOption[];
  p_status?: IOption[];
  p_pref?: any[];
  p_views?: number;

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
