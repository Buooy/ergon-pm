// Core project types
export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  contextSources: ContextSource[];
}

export interface ContextSource {
  id: string;
  type: 'filesystem' | 'github' | 'gdrive';
  config: Record<string, any>;
  enabled: boolean;
}

// Context management types
export interface ContextItem {
  title: string;
  content: string;
  metadata: Record<string, any>;
  path: string;
}

export interface ContextFile {
  path: string;
  title: string;
  type: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  content: string;
}

// Template types
export interface PRDTemplate {
  id: string;
  name: string;
  description: string;
  category: 'product' | 'technical' | 'feature';
  sections: TemplateSection[];
  generatePrompt(context: string, userInput: Record<string, any>): string;
  customFields?: CustomField[];
}

export interface TemplateSection {
  id: string;
  title: string;
  description: string;
  required: boolean;
}

export interface CustomField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect';
  required: boolean;
  options?: string[];
}

// PRD generation types
export interface GeneratePRDRequest {
  projectSlug: string;
  templateId: string;
  customInputs?: Record<string, any>;
  additionalInstructions?: string;
}

export interface GeneratePRDResponse {
  content: string;
  templateUsed: string;
  generatedAt: string;
  contextUsed: string[];
  tokenCount?: number;
}

export interface GeneratedPRD {
  id: string;
  projectSlug: string;
  templateId: string;
  filename: string;
  content: string;
  generatedAt: string;
  contextUsed: string[];
}

// Source adapter types
export interface ContextSourceAdapter {
  type: string;
  name: string;
  connect(config: Record<string, any>): Promise<void>;
  fetchContext(): Promise<ContextItem[]>;
  sync(projectSlug: string): Promise<void>;
  getConfigSchema(): any; // JSON Schema
}
