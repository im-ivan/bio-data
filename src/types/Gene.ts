export interface ExpressionInfo {
  log2FC: number;
  p_value: number;
}

export interface Gene {
  id: string;
  name: string;
  function: string;
  chromosome: string;
  pathway: string;
  expression_data: Record<string, ExpressionInfo>;
}