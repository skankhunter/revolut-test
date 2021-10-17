import { BalancesStateType } from './balance/reducer';
import { CurrenciesStateType } from './currency/reducer';

export type ApplicationState = Readonly<{
    balances: BalancesStateType;
    currencies: CurrenciesStateType;
}>;
