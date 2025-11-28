export interface IStorage {
  // No database operations needed for this documentation website
  // Content is served statically from the frontend
}

export class MemStorage implements IStorage {
  constructor() {
    // No initialization needed
  }
}

export const storage = new MemStorage();
