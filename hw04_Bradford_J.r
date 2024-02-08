# Directions:

# This file contains homework questions for the lecture on working with files
# and data exploration. Questions appear as comments in the file. 

# Please see the Grading Criteria Canvas Page for specific guidance on what
# we expect from you regarding assignment responses.

# Once you have completed the assignment, follow the Submission Instructions 
# on Canvas Pages section to add, commit, and push this to your GitHub repository. 

# Some questions have multiple parts - make sure to read carefully and
# answer all of them. The majority of points lost in homework come from
# careless skipping over question parts.  

###############################################################################

# 1. Write out the file extension and explain what it means for the following
#    files: [comprehension]
#
a. myscript.py - The file extension is .py, indicating that it is a Python script file.

b. /home/arthur/images/selfie.jpg - The file extension is .jpg, indicating that it is an image file in JPEG format.

c. ~/Documents/data.csv - The file extension is .csv, indicating that it is a comma-separated values file, typically used for storing tabular data.



# 2. Which command line utility can be used to determine the type of a file? 
# [code completion]


The command line utility used to determine the type of a file is "file". You can use it by typing file followed by the name of the file you want to inspect


# 3. Why is it a bad idea to explicitly call the `setwd` function within an R
#    script? [comprehension]

#
Explicitly calling setwd() in an R script makes the script less portable and can lead to reproducibility issues

dogs[1:10, c(1, 2, 6)]
dogs[1:10, c('breed', 'group', 'lifetime cost')]
dogs[dogs$lifetime_cost < 18000 & dogs$group != 'tay', c('')]


# 4. List one advantage and one disadvantage for each of these formats:
# [comprehension]
#   
#a. RDS files:

advantage: RDS files are specific to R and are efficient at storing data. they are typically smaller in size and can be read in and out faster than CSV files
disadvantage: because they are specific to R they may not be easily accessible or usable by other software or programming languages.

#b. CSV files:
  
addvantage: CSV files are a universal format, widely supported by many software applications and programming languages. easy to understand and can be opened with simple text editors.
disadvantage: They are larger in size compared to more efficient formats like RDS, especially when dealing with large datasets. They may also lack some of the metadata and structure present in other file formats.


# 5. Why doesn't R automatically load every installed package when it starts?
# [comprehension]

#R doesn't automatically load every installed package when it starts to
enhance startup speed
avoid potential conflicts between package functions.
save memory by loading only the required packages when needed.
In case R updates it needs to reinstall ever so often. Packages are bundles of code other people have written which we can use. There are multiple servers which hold packages, which constantly improve


# 6. Load the dogs data from the `dogs.rds` file provided in lecture.
dogs = read.csv('dogs.rds')
dogs = readRDS('dogs.rds') #given to us in lecture

write.csv(dogs, 'dogs_new.csv', row.names = FALSE)
saveRDS(dogs, 'dogs_new.rds')

nrow(dogs[is.na(dogs$height), ])
dim(dogs[is.na(dogs$height), ])



#     a. How many missing values are in the `height` column? 
#       [code completion + comprehension] 13
sum(is.na(dogs$height))

#     b. Think of a strategy to check the number of missing values in every
#        column using no more than 3 lines of code. Hint: think about last
#        week's lecture. Explain your strategy in words. 
#       [code completion + comprehension] 



for (i in 1:ncol(dogs)) { #FOR EACH Column in the dogs data from col 1 to total col
  print(sum(is.na(dogs[,i])))
}

#code iterates through each column (i) in the dogs data and prints the sum of missing values (NA) in each column. the is.na() function is used to check for missing values and sum() to count them. 
  
#
#     c. Which column has the most missing values? Try to solve this by
#        implementing your strategy from part b. If that doesn't work, you can
#        use the `summary` function to get the number of missing values in each
#        column as well as a lot of other information (we'll discuss this
#        function more next week).
#       [code completion + comprehension] 

missing_counts <- numeric(ncol(dogs)) # Initializes an empty vector missing_counts with the same length as the number of columns in the dogs dataframe.
for (i in 1:ncol(dogs)) { #Iterates through each column index (i) in the dogs dataframe
  missing_counts[i] <- sum(is.na(dogs[, i])) #Computes the sum of missing values for the i-th column of the dogs dataframe and stores it in the vector at index i
}
most_missing_column <- which.max(missing_counts) #Finds the index of the maximum value in the missing_counts vector, indicating the column with the most missing values.






# 7. Use indexing to get the subset of the dogs data which only contains large
#    dogs that are good with kids (the category `high` in the `kids` column
#    means good with kids). [code completion + comprehension]

large_dogs_good_with_kids <- dogs[dogs$size == "large" & dogs$kids == "high", ] 

#dogs$size == "large": This condition selects rows where the size column is equal to "large".
#dogs$kids == "high": This condition selects rows where the kids column is equal to "high", indicating that the dogs are good with kids.
#dogs[condition1 & condition2, ]: This syntax subsets the dogs  based on the conditions provided inside the square brackets. The comma at the end ensures that all columns are selected for the subset.

# 8. With the dogs data:
#
#     a. Write the condition to test which dogs need daily grooming (the result
#        should be a logical vector). Does it contain missing values? 
#       [code completion + comprehension]
need_daily_grooming <- dogs$grooming == "daily" #dogs$grooming == "daily": This condition creates a logical vector indicating whether each dog needs daily grooming or not.
contains_missing <- any(is.na(need_daily_grooming)) 
Yes, it does contain missing values because the contains_missing bool is true
#need_daily_grooming: This variable stores the logical vector indicating which dogs need daily grooming.
#any(is.na(need_daily_grooming)): This checks if there are any missing values in the logical vector 

#     b. Use the condition from part a to get the subset of all rows containing
#        dogs that need daily grooming. How many rows are there?
#       [code completion + comprehension]
dogs_daily_grooming <- dogs[need_daily_grooming, ]
num_rows_daily_grooming <- nrow(dogs_daily_grooming)
There are 83 rows, which is the value stored in num_rows_daily_grooming using the nrow function

#dogs[need_daily_grooming, ]: This subsets the dogs data to include only the rows where need_daily_grooming is TRUE.
#num_rows_daily_grooming <- nrow(dogs_daily_grooming): This counts the number of rows in the subset dataframe dogs_daily_grooming, giving the total number of dogs that need daily grooming.

#
#     c. Use the `table` function to compute the number of dogs in each
#        grooming category. You should see a different count than in part b for
#        daily grooming. What do you think is the reason for this difference?
#       [code completion + interpretation]
grooming_table <- table(dogs$grooming)
#This function computes a frequency table of the grooming column in the dogs dataframe, showing the count of dogs in each grooming category.

I see a different count, that is 88. The difference between directly subsetting for "daily grooming" and using the table() function is because 'table()' treats missing values (NA) as a separate category, while direct subsetting excludes rows with missing grooming values.



#table(dogs$grooming): This function computes a frequency table of the grooming column in the dogs dataframe, showing the count of dogs in each grooming category.


#
#     d. Enclose the condition from part a in a call to the `which` function,
#        and then use it to get the subset of all rows containing dogs that
#        need daily grooming. Now how many rows are there? Does the number of
#        rows agree with the count in part c?
#       [code completion + comprehension]
indices_daily_grooming <- which(need_daily_grooming)
#This returns the indices of the need_daily_grooming vector where the value is TRUE

dogs_daily_grooming2 <- dogs[indices_daily_grooming, ]
#This subsets the dogs dataframe using the indices of dogs that need daily grooming.

num_rows_daily_grooming2 <- nrow(dogs_daily_grooming2)
#This counts the number of rows in the subset dataframe dogs_daily_grooming2, providing the total number of dogs that need daily grooming.
Now there are 23 rows, which agrees with the count in part c as we can see by the grooming_table.

# 9. Compute a table that shows the number of dogs in each grooming category
#    versus size. Does it seem like size is related to how often dogs need to
#    be groomed? Explain your reasoning. [code completion + interpretation]

grooming_vs_size_table <- table(dogs$grooming, dogs$size)
#Computes a frequency table of the grooming column versus the size column in the dogs dataframe. It shows the count of dogs in each combination of grooming category and size category.

# 10. Compute the number of dogs in the `terrier` group in two different ways:
#
#     a. By making a table from the `group` column. 
#       [code completion + comprehension]
terrier_count_table <- table(dogs$group)
#This function computes a frequency table of the group column in the dogs dataframe, showing the count of dogs in each group category.

num_terriers_a <- terrier_count_table["terrier"]
#This retrieves the count of dogs in the "terrier" group from the terrier_count_table using subsetting.

#
#     b. By getting a subset of only terriers and counting the rows.
#       [code completion + comprehension]
terriers_subset <- dogs[dogs$group == "terrier", ]
#This subsets the dogs dataframe to include only rows where the group column is "terrier".

num_terriers_b <- nrow(terriers_subset)
#This function counts the number of rows in the subset dataframe terriers_subset, giving the total number of terriers.


#
#     c. Computing the table is simpler (in terms of code) and provides more
#        information. In spite of that, when would indexing (approach b) be more
#        useful? [comprehension + interpretation]
Indexing (approach b) would be more useful when you need to perform additional operations or analysis  on the subset of terriers. like if you wanted to calculate summary statistics


