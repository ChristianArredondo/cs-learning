"""
1. Call the cost of your dream home total_cost.
2. Call the portion of the cost needed for a down payment portion_down_payment. For
simplicity, assume that portion_down_payment = 0.25 (25%).
3. Call the amount that you have saved thus far current_savings. You start with a current
savings of $0. 
4. Assume that you invest your current savings wisely, with an annual return of r (in other words,
at the end of each month, you receive an additional current_savings*r/12 funds to put into
your savings – the 12 is because r is an annual rate). Assume that your investments earn a 
return of r = 0.04 (4%).
5. Assume your annual salary is annual_salary.
6. Assume you are going to dedicate a certain amount of your salary each month to saving for 
the down payment. Call that portion_saved. This variable should be in decimal form (i.e. 0.1
for 10%). 
7. At the end of each month, your savings will be increased by the return on your investment,
plus a percentage of your monthly salary (annual salary / 12).
Write a program to calculate how many months it will take you to save up enough money for a down
payment. You will want your main variables to be floats, so you should cast user inputs to floats.   
1
Your program should ask the user to enter the following variables:
1. The starting annual salary (annual_salary)
2. The portion of salary to be saved (portion_saved)
3. The cost of your dream home (total_cost)
"""

SALARY_QUESTION = 'Enter your annual salary '
SALARY_SAVINGS_QUESTION = 'Enter the percent of your salary to save, as a decimal '
HOME_COST_QUESTION = 'Enter the cost of your dream home '
SALARY_RAISE_QUESTION = 'Enter the semi­annual raise, as a decimal '


def house_hunting():
    # inputs
    annual_salary = int(input(SALARY_QUESTION))
    portion_salary_saved_per_month = float(input(SALARY_SAVINGS_QUESTION))
    total_cost = int(input(HOME_COST_QUESTION))
    semiannual_raise = float(input(SALARY_RAISE_QUESTION))

    # init
    portion_down_payment = total_cost / 4
    current_savings = 0
    annual_rate = 0.04
    total_months = 0

    while current_savings < portion_down_payment:
        if total_months > 0 and total_months % 6 == 0:
            annual_salary *= (1 + semiannual_raise)

        investment_for_month = (current_savings * annual_rate) / 12
        savings_for_month = (annual_salary / 12) * \
            portion_salary_saved_per_month
        current_savings += savings_for_month + investment_for_month
        total_months += 1
    print('Number of months', total_months)
