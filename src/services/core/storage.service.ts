class Storage {
  private isLocalStorage: boolean;
  private storage: any;

  constructor() {
    this.isLocalStorage = false;
    this.storage = null;
    this.setupStorage();
  }

  setupStorage() {
    try {
      // try to use localStorage
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      this.isLocalStorage = true;
    } catch (e) {
      this.isLocalStorage = false;
    }
  }

  clearStorage() {
    if (this.isLocalStorage) {
      localStorage.clear();
      sessionStorage.clear();
    } else if (typeof window !== 'undefined') {
      (window as any).storage = {};
    }
  }

  getStorage(session: boolean) {
    if (this.isLocalStorage) {
      return session ? sessionStorage : localStorage;
    } else if (typeof window !== 'undefined') {
      // Privacy Mode. Using window.storage instead of localStorage.
      if (!window.hasOwnProperty('storage')) {
        (window as any).storage = {};
      }

      return (window as any).storage;
    }
    return {};
  }

  remove(name: string, session: boolean = false) {
    this.getStorage(session)[name] = null;
  }

  get(name: string, session: boolean = false) {
    const value = this.getStorage(session)[name];

    if (value === 'null') {
      return null;
    }

    return value || null;
  }

  set(name: string, value: any, session: boolean = false) {
    const storage = this.getStorage(session);

    storage[name] = value;

    return storage;
  }

  has(name: string, session: boolean = false) {
    return this.getStorage(session).hasOwnProperty(name);
  }

  hasToken(session: boolean = false) {
    const storage = this.getStorage(session);
    return (
      !!storage[process.env.TOKEN_STORAGE_NAME || 'TOKEN'] &&
      storage[process.env.TOKEN_STORAGE_NAME || 'TOKEN'] !== 'null'
    );
  }

  getToken(session: boolean = false) {
    return this.get(process.env.TOKEN_STORAGE_NAME || 'TOKEN', session);
  }

  setToken(token: string, session: boolean = false) {
    this.set(process.env.TOKEN_STORAGE_NAME || 'TOKEN', token, session);
  }

  removeToken(session: boolean = false) {
    this.remove(process.env.TOKEN_STORAGE_NAME || 'TOKEN', session);
  }
}

export default new Storage();
