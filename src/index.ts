import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReports } from './reportTargets/ConsoleReports';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const winAnalysis = new WinAnalysis('Man United');
const consoleReports = new ConsoleReports();

const summary = new Summary(winAnalysis, consoleReports);
summary.buildAndReport(matchReader.matches);
