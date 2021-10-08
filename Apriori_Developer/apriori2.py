 #for sets and generating combinations
from itertools import chain, combinations
#to store item in index
from collections import defaultdict



def subsets(arr):

    # Chain(*iterable data struct) use to merge different items from different sets
    # INPUT => A= {"Avocado,Apple"} B= {"Orange"}
    # OUTPUT => list(chain(a,b))
    # You must convert the merged items into List or other iterable data structure Before using it.

    # cobinations(iterable, combine)
    # First Parameter, USe to generate combinations of items from iterable data source
    # Second Paramter,  tell how may items must be in a group
    # INPUT => {1,2,6,7}
    # OUTPUT => {1,2}{1,6}{1,7}...
    # if the input is sorted result if also sorted and if not the other way around

    # APPLICATION combinations(arr, i + 1) for i, a in enumerate(arr)
    #  for int i= 0; i < arr.length ; i++){
    #     combinations(arr,1+1);
    # }
    # This means that the number of combinations in param 2 _i+1_ is the index of item + 1
    # +1 to prevent having {} empty set
    # Example data={a,b,c,d}
    # firstt iteration: combination(data,0+1) = {a},{b},{c},{d}
    # Second iteration: combination(data,1+1) = {a,b},{a,c},{a,d},{b,c}...
    # Third iteration: combination(data,2+1) = {a,b,c},{a,b,d} ...

    # chain(*[combinations(arr, i + 1) for i, a in enumerate(arr)])
    # Get COmbinations and Merge using chain
    # INPUT => data = {a,b,c}
    # AFTER => first iteration: combination(data,0+1) = {a},{b},{c}
    # AFTER => second iteration: combination(data,1+1) = {a,b},{a,c},{b,c}
    # AFTER => third (final) iteration: combination(data,2+1) = {a,b,c}
    # AFTER => chain(*[combinations(arr, i + 1) for i, a in enumerate(arr)]) = {{a},{b},{c},{a,b},{a,c},{b,c},{a,b,c}}
    return chain(*[combinations(arr, i + 1) for i, a in enumerate(arr)])


def returnItemsWithMinSupport(itemSet, transactionList, minSupport, freqSet):
        # Declare EMPTY SET 

        _itemSet = set()
        # declare a dictionary(int)
        # all of the data must be int
        # and forcing default value to be 0
        localSet = defaultdict(int)


        # THIS TIME we Split 
        for item in itemSet:
                for transaction in transactionList:
                        if item.issubset(transaction):
                                freqSet[item] += 1
                                localSet[item] += 1

        for item, count in localSet.items():
                support = float(count)/len(transactionList)

                if support >= minSupport:
                        _itemSet.add(item)

        return _itemSet


def joinSet(itemSet, length):
        """Join a set with itself and returns the n-element itemsets"""
        return set([i.union(j) for i in itemSet for j in itemSet if len(i.union(j)) == length])


# THIS FUNCTION RETURN TWO VALUES a.k.a TUPPLE (same sa database )
def getItemSetTransactionList(data_iterator):

    # getItemSetTransactionList(data_iterator)
    # @param data_iterator, GENERATOR (yield) coming from parsed CSV
    # @return, tuppple => itemSet, transactionList


    # CREATE an Empty list; => transactionList = list()
    # CREATe an Empty set; => itemSet = set()

    # Universal SET on our parsed CSV  as __data_iterator__ { {set1},{set2},{set3}}
    # GET EACH SET from UNIVERSAL SET __ for record in data_iterator:__  {set1},{set2},{set3}

    # record ==> ARE TTHE SET OF ELEMENTS IN EACH LINE OF CSV
    # transaction = frozenset(record); transaction = set of elements in each csv row or line
    # store each set to an immutable set 
    # this will make sure that data cannot be modify mistake

    # transactionList.append(transaction) ; TransactionList = store the transaction(frozenset) to a list to be manipulate
    # We store the frozen to a LIST 


    # #  for item in transaction:
    #         itemSet.add(frozenset([item]))
    # Get the elements in a row of our csv(transaction) stored in a frozenset
    # we get these elements indivually ; frozenset([item]) ; item here means the item that we want to extract
    # and storing it to an editable set (itemSet); itemSet.add(frozenset([item]))


    # repeat the process until the last line of csv


    # APPLICATION
    # CONTAINER
    # ->transactionList (empty)
    # ->itemSet (empty)
    # Universal Set or  data_iterator var = {{row1},{row2},{row3}...}

    # FIRST 
    # Transaction = frozen({row1})
    # TransactionList = { {frozen(row1)} }
        # item = {row1}
        # loop1:
        #     itemset.add(col1)
        # loop2:
        #     item.add(col2)
        # loop3:
        #     item.add(col3)
        # until all elements in a row was scanned

    #SECOND LOOP our variable have
        # transactionList ={ {frozenset(row1)} }
        # itemSet = { frozenset({a}),frozenset({b}),frozenset({c})}
    # above process will continue after all elements  stored in out itemseet variable
    # VISUALIZER copy PASTE TO BLANK PYTHON FILE Indent properly
    # elementsofRow = {'a','b','c'}
    # setRow = frozenset(data)
    # itemset = set();
    # for item in setRow:
    #     itemset.add(frozenset([item]))
    # print(items)

    transactionList = list() # universal set of row set {row1,row2,..} ****row contain elements of each row
    itemSet = set() # a universal set of ALL Elements in the csv
    for row in data_iterator:
        transaction = frozenset(row)
        transactionList.append(transaction)
        for item in transaction:
            itemSet.add(frozenset([item]))             
    return itemSet, transactionList

    # return itemSet, TransactionList
    # a,b = getItemSetTransactionList(data_iterator)
    #     itemSet result will be store on variable a
    #     transactionList result will be store on variable b


def runApriori(data_iter, minSupport, minConfidence):


    # Pass the set of all the row set and its elements
    # TUPPLE
    # return (set) itemset = > set of all items in csv {'apple','avocado'...}
    # return (list) transactionList => a set of row sets in the csv {{row1},{row2}...}
    itemSet, transactionList = getItemSetTransactionList(data_iter)


    # FreqSet , serves as the dictionary of indices of the sets to track their location
    # as they are in process
    #  defaultdict(int)
    #  means all the value must be in and its default value is 0 in each elements
    # it will return the default value when the index doen't exist in our case 0

    # largerSet, serves as the storage area of those set in L1 L2 L3 L4...
    # dict()
    # It will store any value however once you access not existing location
    # it will throw error while defaultdict() will return defaault value

    # assocRules, serves as the storage area of those set reach the association part...
    # dict()
    # It will store any value however once you access not existing location
    # it will throw error while defaultdict() will return defaault value

    freqSet = defaultdict(int)
    largeSet = dict()
    assocRules = dict()

    # oneCSet, storage area for those set passed the Minimum support.
    # returnItemsWithMinSupport(itemSet,transactionList,minSupport,freqSet)

    # itemSet             => "set of all elements in the csv"
    # TransactionList     => "set of all "
    # minSupport          =>Minimum support
    # freqSet             => our variable use to record the indices of sets

    #c1
    oneCSet = returnItemsWithMinSupport(itemSet,transactionList,minSupport,freqSet)

    # SINCE DATA from C set also can be seen to L set
    currentLSet = oneCSet


    # k use to indicate the l1 c1 l2 c2....
    # start 2 because we already have c1 l1

    k = 2 

    # STARTING FROM L1
    # we Store its Value to the dictionary largeSet
    # The we Get the combinations of sets from previus process 
    # and get those set from L that pass the minimum Support
    # then THe  sets from Ck will be transfer to Lk+1 
    # and repeat the process until the last Set will no longer satisfy the minimum suppport
    #  that will terminate if the Lset become Empty
    while(currentLSet != set([])):
        largeSet[k-1] = currentLSet
        currentLSet = joinSet(currentLSet, k)
        currentCSet = returnItemsWithMinSupport(currentLSet,
                                                transactionList,
                                                minSupport,
                                                freqSet)
        currentLSet = currentCSet
        k = k + 1


        # Basic Formula to get the Support Value

        # number on how many items appeared in a given transaction Lk 
        # over the total row in the transaction Table 
    def getSupport(item):
            return float(freqSet[item])/len(transactionList)



# Create an ARRAY of ITEMS THAT WILL PASS       
    toRetItems = []


    # key is the index
    # important to iterate the individualitems
    # value are the sets stored in largeSET which passed the MIN SUPPORT
    # [(tuple(item), getSupport(item)) for item in value]
    # get the sets calculate its support the store as list and add to RETITEMS
    # {{'K','O'},0.893}



    for key, value in largeSet.items():
        toRetItems.extend([(tuple(item), getSupport(item))
                           for item in value])


    # return ToREtRules

   # get  the ITEMS from a dictionary containing the sets fro L1 to Lk
   # by iterating





    toRetRules = []
    # get the individual sets from the dictionary containing sets from L1 to LK
    for key, value in list(largeSet.items())[1:]:

        # iterate to the elements transaction table L1 C2...
        for item in value:
            # get the subsets of the IN THE Table
            # map is use to get the data from iterabble w/out loooping
            # frozenset will be use to extract the subsets { {frozenset({set}) } }
            _subsets = map(frozenset, [x for x in subsets(item)])
            # subsets = {{a,b},{a,c}...}

            # Ge the element of each subsets {'m','k'...}
            for element in _subsets:
                #get the difference
                # return only the items that are not present in the mapped subsets above
                remain = item.difference(element)

                # if there items LEFT
                if len(remain) > 0:
                    # calculate the confidence and if the confidence of
                    # certain rules is greater than that of minimum add it to the SUCCESS RULES
                    confidence = getSupport(item)/getSupport(element)
                    if confidence >= minConfidence:
                        # {{{'K','L'},{'E'}} , {support,confidence}}
                        toRetRules.append(((tuple(element), tuple(remain)),(
                                           confidence,getSupport(item))))
    
   
    return  toRetRules
