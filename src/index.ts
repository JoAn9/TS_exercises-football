import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReports } from './reportTargets/ConsoleReports';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const matchReader = MatchReader.matchFromCsv('football.csv');
const summary = Summary.winAnalysisAndHtmlReport('Man City', 'report');

matchReader.load();
summary.buildAndReport(matchReader.matches);
