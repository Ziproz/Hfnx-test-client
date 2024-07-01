
export interface Owner {
    login: string;
    avatarUrl: string;
  }
  
export interface Repository {
    name: string;
    owner: Owner;
  }  