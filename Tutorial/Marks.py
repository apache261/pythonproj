Denise      = {
                "name":         "Denise Alvarez",
                "lab":          [90,80,96],
                "assignment":   [90,87,92,87,90],
                "test":         [90,82,99,90]
            }
Denice      = {
                "name":         "Deenice Hermano",
                "lab":          [97,89,96],
                "assignment":   [98,98,94,92,93],
                "test":         [90,94,93,91]
            }

# get the average of the scores in LIST form
# example [90,90,89,21]
# this function will get their sum and divide to the number of elements
def get_test_average(list_marks):
    return sum(list_marks)/len(list_marks)

# compute the final scores of the student on each test
# and apply the corresponding percentages 10,70, 20
# round off the result in 2 decimal places
def get_final_score(dict_student):
    lab             = get_test_average(dict_student["lab"])
    test            = get_test_average(dict_student["test"])
    assignment      = get_test_average(dict_student["assignment"])
    sum_score       = (0.1 * assignment) +(0.7 * test) + (0.2 * lab)
    return round(sum_score,2)

# Convert the numeric score to its letter equivalence
def get_letter_score(score):
    if   score >= 90: return "A"
    elif score >= 80: return "B"
    elif score >= 70: return "C"
    elif score >= 60: return "D"
    else:             return ""

# compute the grades students
# What we are going to do is to make a list of lists
# [
#   ["Denise Alvarez", 90.2, "A"],
#   ["Denice Hermano", 96.2, "A"]
# ]
# This was achieve by creating 2 lists,
# First list will be the main list
# second list will be push to first list

def compute_student_scores(students):
    list_grade_record = list() # first List
    for student in students:
        tmp_list = list()   # Second List
        avg_gr   = get_final_score((student)) # compute the score of the student
        tmp_list.append(student["name"])       # Get and push to the tmp list the name of the student from the dictionary
        tmp_list.append(avg_gr)                # push the average to the tmp list
        tmp_list.append(get_letter_score(avg_gr))  # get the letter score and push to the tmp list

        list_grade_record.append(tmp_list) # push the tmp list to the main list
    return list_grade_record               # return list of grades


# Compute class avg and letter
# [
#   ["Denise Alvarez", 90.2, "A"],
#   ["Denice Hermano", 96.2, "A"]
#   [index0, index1, index2]
# ]
# compute only the grades
# get the sum and divide to the number of items and round off to 2 decimal places
def compute_whole_class(student_scores):
    score_list = list()
    total_scores  = 0
    for scores in student_scores:
        total_scores += scores[1] # sum = sum + score[1] <==

    total_avg        = total_scores/len(student_scores)

    score_list.append(total_avg)
    score_list.append(get_letter_score(total_avg))

    return round(score_list,2)




# Test Cases
class_list                = [Denise, Denice]

list_class_record        = compute_student_scores(class_list)
list_entire_avg          = compute_whole_class(list_class_record)

for record in list_class_record:
    print(f"Student: {record[0]}")
    print(f"Average: {record[1]}")
    print(f"Letter:  {record[2]}")
    print("+++++++++++++++++++++")

# whole Class

print("======== WHOLE CLASS ==========")
print(f"Average: {list_entire_avg[0]}")
print(f"Letter: {list_entire_avg[1]}")