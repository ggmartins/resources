export interface CatalogEntry {
  id: string,
  name: string,
  link: string,
}

export interface Catalog {
  id: string,
  name: string,
  entry: Array<CatalogEntry>,
}

const data: Catalog = {
  id: 'root',
  name: 'Catalog',
  entry: [
    {
      id: '1',
      name: 'Computer Science',
      link: 'resources/docs/computerscience'
    }
  ],
};

export default data;
