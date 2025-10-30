import { TemplateType, Priority, Scope } from './constants';

export interface TemplateSummary {
  slug: string;
  title: string;
  description: string;
  type: TemplateType;
  priority: Priority;
  scope: Scope;
}

export interface TemplateFull extends TemplateSummary {
  content: string;
  version: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  status: 'ok' | 'error';
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  meta?: {
    count?: number;
    version?: string;
    timestamp?: string;
  };
}

