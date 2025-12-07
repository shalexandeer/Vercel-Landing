// Define the Branch type from Sanity
export interface Branch {
  _id: string;
  name: string;
  address: string;
  mapQuery: string;
  phone: string;
  order: number;
}

// Define the fallback Branch type
export interface FallbackBranch {
  id: number;
  name: string;
  address: string;
  mapQuery: string;
  phone: string;
}

// Define a unified type that can be either Branch or FallbackBranch
export type UnifiedBranch = Branch | FallbackBranch;