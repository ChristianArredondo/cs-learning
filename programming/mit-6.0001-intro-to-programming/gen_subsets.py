
def gen_subsets(L):
    if len(L) == 0:
        return [[]]

    rest_subs = gen_subsets(L[:-1])
    last = L[-1:]

    rest_subs_with_last = []
    for rest_sub in rest_subs:
        rest_subs_with_last.append(rest_sub + last)
    return rest_subs + rest_subs_with_last