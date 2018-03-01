export class Item {
  protected m_type: string = '';
  protected m_name: string = '';
  constructor(type, responese) {
    this.m_type = type;
    this.m_name = responese.name;
  }

  get type(): string {
    return this.m_type;
  }

  get name(): string {
    return this.m_name;
  }
}

export class File extends Item {
  protected m_sha: string = '';
  constructor(responese) {
    super('file', responese);
    this.m_sha = responese.sha;
  }

  get sha(): string {
    return this.m_sha;
  }
}

export class Folder extends Item {
  private m_path: string;
  private m_children: Map<string, Item> = new Map();
  constructor(response) {
    super('dir', response);
    this.m_path = response.path;
  }

  get path(): string {
    return this.m_path;
  }

  add(file: Item) {
    this.m_children.set(file.name, file);
  }

  getFileByName(name: string): Item {
    return this.m_children.get(name);
  }

  all() {
    return Array.from(this.m_children, val => ({ key: val[0], value: val[1] }));
  }
}
