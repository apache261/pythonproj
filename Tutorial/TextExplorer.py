
def countSyllable(word = ""):
    word = word.strip().lower()
    count = 0
    vowels = "aeiouy"
    # Orange
    # First Letter
    if word[0] in vowels:
        count += 1
    # Second to last
    for index in range(1, len(word)):
        if word[index] in vowels and word[index - 1] not in vowels:
            count += 1
        # Denise
        # De + 1
        # ni + 1
        # se + 1

    if word.endswith("e"):
        count -= 1
    if count == 0:
        count += 1

    return count

def performTask(sentenceList):
    sentencesCount       = len(sentenceList)-1 # exclude last period
    wordCount           = 0
    uniquewordset       = set() #you can only add unique items in set means only unique word
    entireSyllable      = 0
    morethan2syllable   = 0
    digitCount          = 0

# ['Hi', 'Denice', 'Hi', 'Deenice']
    for sentence in sentenceList[0:sentencesCount]:
        words       = sentence.strip().lower().split(" ")
        wordCount += len(words) # Words in entire text

        # Hi
        for word in words:
            if word.isdigit():
                digitCount += 1     # Number on the entire text
                continue            # prevent the execution to go down

            uniquewordset.add(word) #add word to set
            wordSyllable      = countSyllable(word)
            entireSyllable += wordSyllable
            if wordSyllable > 2:
                morethan2syllable += 1


    return {
        "totalSen": sentencesCount,
        "avgSenLength": round(wordCount/sentencesCount),
        "totalWords":wordCount,
        "uniqueWords":len(uniquewordset),
        "entireSyllable": entireSyllable,
        "avgSylWord": round(entireSyllable/wordCount),
        "avgSylSentence":round(entireSyllable/sentencesCount),
        "avgSyl100":round(entireSyllable/(wordCount/100)),
        "moreThan2Syl":morethan2syllable,
        "digitCount": digitCount
    }

storyFile               = open("story.txt","r")
storyContent            = storyFile.read()
storyFile.close()                                   # Deallocate Memory consume by the file
storyContent            = storyContent.replace("?",".")
storyContent            = storyContent.replace("!",".")
sentences               = storyContent.split(".")   # Split the contents using period(.) since sentence ends with period
# ['Hi Denise', 'Hi Deenice']
resultDictionary        = performTask(sentences)

print("Number of Sentence: ",resultDictionary["totalSen"])
print("Average Sentence Length: ", resultDictionary["avgSenLength"])
print("Number of words: ", resultDictionary["totalWords"])
print("Number of Unique Words: ", resultDictionary["uniqueWords"])
print("Number of Syllables: ", resultDictionary["entireSyllable"])
print("Average syllable per word: ", resultDictionary["avgSylWord"])
print("Average syllable per sentence: ", resultDictionary["avgSylSentence"])
print("Average syllable per 100 words: ", resultDictionary["avgSyl100"])
print("Number of words with more than 2 Syllables: ", resultDictionary["moreThan2Syl"])
print("Number of digits in text: ", resultDictionary["digitCount"])