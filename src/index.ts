import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResults';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United wins ${manUnitedWins} games`);
