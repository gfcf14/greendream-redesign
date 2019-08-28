# Mock Pipeline configuration
# ===========================

# This is a mock pipeline script to avoid using the one in bitbucket

# Here are some color codes to fancify:
# Black        0;30     Dark Gray     1;30
# Red          0;31     Light Red     1;31
# Green        0;32     Light Green   1;32
# Brown/Orange 0;33     Yellow        1;33
# Blue         0;34     Light Blue    1;34
# Purple       0;35     Light Purple  1;35
# Cyan         0;36     Light Cyan    1;36
# Light Gray   0;37     White         1;37

TITLE='\033[1;37m'
STEP='\033[0;34m'
PASS='\033[0;32m'
ERROR='\033[0;31m'
FINISH='\033[1;32m'
END='\033[0m'

COMPLETE=true

STEPS=("yarn test" "yarn run lint" "yarn run stylelint")
NAMES=("Unit Testing" "ESLint" "StyleLint")
TOTAL_STEPS=${#STEPS[@]}

printf "${TITLE}MOCK PIPELINE PRE-COMMIT CHECK thanks to Husky\n"
printf "==============================================\n\n${END}"

printf "${ERROR}Before we begin...\n\n${END}"

while true;
do
  read -r -p "Have you exported greendreamdb.sql from greendream.net (y/n)? " response </dev/tty
  if [[ $response =~ ^([yY][eE][sS]|[yY])$ ]]
  then
    for i in ${!STEPS[@]}; do
      STEP_NO=$(($i + 1))

      printf "${STEP}${STEP_NO}) Step ${STEP_NO} of ${TOTAL_STEPS}: ${NAMES[$i]}\n${END}"
      eval ${STEPS[$i]}
      if [ $? = 0 ]
      then
        printf "${PASS}${NAMES[$i]} successfully passed!\n\n${END}"
      else
        let COMPLETE=false
        printf "${ERROR}${NAMES[$i]} failed. Check your code and fix it!\n\n${END}"
        break
      fi
    done

    if [ $COMPLETE = true ]
    then
      printf "${FINISH}All Tests successfully passed!\n\n${END}"
      exit 0
    fi

    exit 1
  else
    printf "${ERROR}Please export greendreamdb.sql before pushing any commits to avoid loss of users/downloads!\n\n${END}"
    exit 1
  fi
done

