
SALARY_QUESTION = 'Enter the starting salary '


def house_hunting():
    # prompt user
    annual_salary = int(input(SALARY_QUESTION))

    # constants
    semiannual_raise_rate = .07
    investment_annual_return_rate = 0.04
    cost_of_house = 1 * 10 ** 6
    target_total_months = 36
    savings_target = 100
    down_payment = cost_of_house / 4

    # iteration state
    current_salary = annual_salary
    total_steps = 0
    total_savings = 0
    min_rate = 0.0001
    max_rate = 1
    maybe_savings_rate = None
    went_over = False

    # bisection search
    while not abs(total_savings - down_payment) <= 100:
        # update boundaries on every bisection search after the first one
        if not maybe_savings_rate == None:
            if total_savings < down_payment:
                min_rate = maybe_savings_rate
            else:
                went_over = True
                max_rate = maybe_savings_rate

        # set savings rate and total savings
        new_rate = round((min_rate + max_rate) / 2, 4)
        if new_rate == maybe_savings_rate:
            if went_over:
                print('It is possible to pay the down payment, but not within $100')
                print('Total saved:', total_savings)
                break
            else:
                print('It is not possible to pay the down payment in three years.')
                print('Total saved:', total_savings)
                return

        maybe_savings_rate = new_rate
        total_savings = 0
        current_salary = annual_salary

        # calculate total savings over 36 months
        for month in range(36):
            # apply salary raise every 6 months
            if month > 0 and month % 6 == 0:
                current_salary *= (1 + semiannual_raise_rate)

            # calculate investment and and salary savings
            monthly_investment_saving = total_savings * investment_annual_return_rate / 12
            monthly_salary_saving = current_salary * maybe_savings_rate / 12

            # increment total savings
            total_savings += monthly_investment_saving + monthly_salary_saving
        total_steps += 1

    print('Best savings rate:', maybe_savings_rate)
    print('Steps in bisection search:', total_steps)
