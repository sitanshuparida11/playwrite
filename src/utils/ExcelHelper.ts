//Import xlsx plugin
import * as XLSX from 'xlsx';
import fs from 'fs';




//Define testdata structure
export interface TestData {
   SKILL1: string;
   SKILL2: string;
}

//Create method to read excel file
export function readExcelFile(filePath: string){

  //Read the file
  const fileBuffer = fs.readFileSync(filePath);

  //Parse the file
  const workbook = XLSX.read(file);

  //Get the first sheet 
  const firstSheetName = workbook.SheetNames[0];

  //convert the sheet to JSON
  const jsonData = XLSX.utils.sheet_to_json<TestData>(workbook.Sheets[firstSheetName]);

  //convert raw data tio TestData array
  jsonData.slice(1).forEach((row: any) => {
    const testData: TestData = {
      SKILL1: row.SKILL1,
      SKILL2: row.SKILL2,
    };
  });
}