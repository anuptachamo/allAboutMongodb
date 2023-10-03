use BankSystem;
db
// bank
db.bank.insertMany([{bank_id : '10011', bank_name : 'Sanima Bank Limited', bank_branch : 'Bhaktapur-jagati', bank_contact : '01-6615279', bank_email : 'sanimabank@gmail.com',
                     bank_website : 'sanimabank.np.com'},
                     
                    {bank_id : '102', bank_name : 'Nepal Bank Limited', bank_branch : 'Bhaktapur-Suryabinayak', bank_contact : '01-6678912', bank_email : 'neapalbank@gmail.com',
                     bank_website : 'nepalbank.np.com'},
                     
                    {bank_id : '103', bank_name : 'Nabil Bank Limited', bank_branch : 'Kathmandu-koteshwor', bank_contact : '01-6687914', bank_email : 'nabilbank@gmail.com',
                     bank_website : 'nabilbank.np.com'}]);
 
db.bank.find();             
db.bank.find({"bank_id": '102'});
db.customers.find({"customer_id":''});
db.bank.drop();
// bank


// staff
db.staffs.insertMany([{staff_id : '101', staff_name : 'Rabin Gapi', staff_address : {country: "Nepal", street: "jagati", city: "Bhaktapur"}, staff_contact : '9890918818', 
                       staff_email : 'rabingapi@gmail.com', position_of_staff : 'junior Level', staff_salary : '30000'}, 
                                          
                      {staff_id : '102', staff_name : 'Yaman Sanda', staff_address : {country: "Uk", street: "abc", city: "lolnda"}, staff_contact : '9800918212', 
                       staff_email : 'yamansanda@gmail.com', position_of_staff : 'Senior Level', staff_salary : '30000'}, 
                                          
                      {staff_id : '103', staff_name : 'Kabina Pandey', staff_address : [{country: "India", street: "xyz", city: "Dheli"},{country: "China", street: "qwer", 
                       city: "lulum"}], staff_contact : '9890018381', staff_email : 'kabinapandey@gmail.com', position_of_staff : 'junior Level', staff_salary : '20000'}]);
                     
db.staffs.find();
db.getCollection('staffs').find({});
db.staffs.drop(); 
// staff   


// customers
db.customers.insertMany([{customer_id : '101', customer_name : 'Anjana Kapoor', customer_address : 'Kausaltar', customer_phone : '9889718762', customer_email : 'anjanakapoor@gmail.com',
                          customer_username : 'kapooranjana', customer_password : 'kapoor123@#'},
                                                    
                        {customer_id : '102', customer_name : 'Matina Manandhar', customer_address : 'Jarsing pauwa', customer_phone : '9809918737', customer_email : 'matina123@gmail.com',
                         customer_username : 'manandharmatina', customer_password : 'matina12&'}, 
                                                
                        {customer_id : '103', customer_name : 'Bal Govinda Awal', customer_address : 'Nagarkot', customer_phone : '9889014711', customer_email : 'balgovinda11@gmail.com',
                         customer_username : 'awalbal$%', customer_password : 'bal%&*%#1'},                         
                                                 
                        {customer_id : '104', customer_name : 'Ujwal Lamichhami', customer_address : 'Gathaghar', customer_phone : '984367852', customer_email : 'ujwal12@gmail.com', 
                         customer_username : 'ujwal123', customer_password : 'Lami^$&!'}]);
                         
db.customers.find();
db.customers.drop();
// customers


// accounts
db.accounts.insertMany([{account_id : '401', account_name : 'Ajul shrestha', account_number : '0000178178186198', account_balance : '10000',
                         account_description : 'This is for my personal.'},
                         
                       {account_id : '402', account_name : 'Roshan Bhaila', account_number : '0000897617819167', account_balance : '70000',
                        account_description : 'For college fee'},
                        
                       {account_id : '102', account_name : 'Matina Manandhar', account_number : '0000789768267222', account_balance : '2000',
                        account_description : 'For school fee'},
                        
                       {account_id : '103', account_name : 'Karishna Ram Gosia', account_number : '0000776515818781', account_balance : '25000',
                        account_description : 'for tour'}]);

db.accounts.find(); 
db.accounts.find().pretty();
// accounts


// saving accounts
db.saving_accounts.insertMany([{saccount_id : '661', account_id : '455', saccount_date : '19-july-2010', withdrawn_amount : '3000', deposit_amount : '20000', balance : '17000',
                                interest_rate : '6.3%', description : 'nothing'},
                                
                             {saccount_id : '662', account_id : '457', saccount_date : '10-june-2011', withdrawn_amount : '1000', deposit_amount : '10000', balance : '19000',
                              interest_rate : '6.3%', description : 'for personal'},
                              
                              {saccount_id : '102', account_id : '103', saccount_date : '20-aug-2022', withdrawn_amount : '10000', deposit_amount : '30000', balance : '20000',
                              interest_rate : '6.3%', description : 'for business'},
                              
                              {saccount_id : '103', account_id : '104', saccount_date : '23-dec-2020', withdrawn_amount : '5000', deposit_amount : '50000', balance : '45000',
                              interest_rate : '6.3%', description : 'for school fee'}]);
                                  
db.saving_accounts.find(); 
// saving accounts



// loan accounts
db.loan_accounts.insertMany([{laccount_id : '991', loan_date : new ISODate(), loan_time_period  : '10 years', loan_total_amount : '3000000', loan_interest_rate : '14%'},

                            {laccount_id : '992', loan_date : new Date(), loan_time_period  : '6 years', loan_total_amount : '4000000', loan_interest_rate : '15%'},
                            
                            {laccount_id : '993', loan_date : '2-feb-2021', loan_time_period  : '5 years', loan_total_amount : '5000000', loan_interest_rate : '14%'},
                            
                            {laccount_id : '102', loan_date : '1-apr-2022:12:30:25', loan_time_period  : '20 years', loan_total_amount : '2000000', loan_interest_rate : '16%'},
                            
                            {laccount_id : '103', loan_date : ISODate()+1, loan_time_period  : '10 years', loan_total_amount : '6000000', loan_interest_rate : '15%'}]);

db.loan_accounts.find();
db.loan_accounts.drop();
//loan accounts                              
         
// lookup
//customers and bank tables (show equal id only)
db.customers.aggregate(
 {
     $lookup:
     {
     from:"bank",
     localField:"customer_id",     // field in the customers collection
     foreignField:"bank_id",       // field in the bank collection
     as: "banks"
     }
 },
 
     { $match :
          {
               "banks" : { $ne : []}   //show equal value only
                 
          }   
      } 
 );
 
//customers and saving_accounts tables(show all fields)
db.customers.aggregate(
 {
     $lookup:
     {
         from:"saving_accounts",
         localField:"customer_id",     // field in the customers collection
         foreignField:"saccount_id",       // field in the saving accounts collection
         as: "savingAccount_docs"
     }
 }).pretty();
 
 // accounts and loan_accounts tables   --here accounts is a local and loan_accounts is foreign
db.accounts.aggregate(
 [
         {
             $lookup:
             {
                 from : "loan_accounts",
                 localField : "account_id",       // field in the accounts collection
                 foreignField : "laccount_id",      // field in the loan_accounts collection
                 as : "loanAccounts_docs"   
             }
         }
])

//the $mergerObecjts operator merges multiple documents into one.
//staffs and accounts table
db.staffs.aggregate([
    {
        $lookup:
        {
            from: "accounts",
            localField: "staff_id",            // field in the staffs collection
            foreignField: "account_id",      // field in the accounts collection
            as: "accounts_docs"
        }  
    },
    
//    started
    {
      $replaceRoot: 
      { 
          newRoot: 
          {
               $mergeObjects: 
               [ 
                   { $arrayElemAt: [ "$customer_docs", 0 ] },"$$ROOT" 
               ] 
           } 
      }
    },
//    eneded
   { 
       $project: 
       { customer_docs: 0 } 
   }
])
// lookup


// Timestamp
/*new Date() -timestamp in ISODate
"year-month-date hour:min:sec zone"*/
/*new Date().getTime() -milliseconds */
db.loan_accounts.find({"loan_date": {$lt: new Date(), $gt: new Date(new Date().getTime() -(24*60*60*1000) )}}) 

//partition
db.saving_accounts.aggregate([
    {
        $lookup: {
            from: 'accounts',
            localField: 'account_id',
            foreignField: 'account_id',
            as : 'accounts_doc'
        }
            
    },
    {$unwind: '$accounts'},
    {
        $project: {
            _id: '$_id',
            saccount_date: '$saccount_date',
            account_name: '$accounts.account_name',
            account_balance: '$accounts.account_balance'
        }
    },
    {
        $group: {
            _id: '$account_name',
            total_balance: {$sum: '$account_balance'},
            average_balance: {$avg: '$account_balance'}
        }
    }
    ])





















 
 