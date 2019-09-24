import { MatchData } from './MatchData';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinAnalysis } from './analyzers/WinAnalysis';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winAnalysisAndHtmlReport(teamName: string, path: string): Summary {
    return new Summary(new WinAnalysis(teamName), new HtmlReport(path));
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
