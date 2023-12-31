const express = require('express');
const router = express.Router();
require('dotenv').config();

function padNumberWithZeros(number, desiredLength) {
    // Convert the number to a string
    let numberString = number.toString();

    // Calculate the number of zeros to add
    let zerosToAdd = Math.max(0, desiredLength - numberString.length);

    // Add the zeros to the beginning of the string
    let paddedNumber = '0'.repeat(zerosToAdd) + numberString;

    return paddedNumber;
}

const tokens = ["1-HD5M", "2-1K86", "3-KW0R", "4-MSKK", "5-AWZ0", "6-NCD7", "7-IWM2", "8-LXVO", "9-3SNB", "10-GEXL", "11-WF98", "12-9H1Y", "13-GQJD", "14-PENI", "15-2V97", "16-UR4G", "17-9C68", "18-RPGB", "19-F9HE", "20-PE9I", "21-G1YU", "22-4SLA", "23-GJWB", "24-560Q", "25-HRKX", "26-PSNQ", "27-FXQA", "28-FQLH", "29-IWT3", "30-NNCN", "31-VHVO", "32-GLA1", "33-93SC", "34-EVQL", "35-NAH5", "36-SZSF", "37-4719", "38-MZ8B", "39-DWCZ", "40-KWPA", "41-1UWR", "42-2EKC", "43-BLCA", "44-NYOK", "45-DBP0", "46-4I8V", "47-1C7D", "48-B1IE", "49-0CZ2", "50-DT7S", "51-XZU9", "52-WKK9", "53-I5B9", "54-MA4C", "55-MCYI", "56-ZT79", "57-CS93", "58-ADV6", "59-EP3C", "60-LW9U", "61-SNVL", "62-ICJ9", "63-IGOC", "64-CHXR", "65-ZDYE", "66-J6Y7", "67-NPYH", "68-CNWJ", "69-RHBO", "70-N3V3", "71-TUW6", "72-AP4C", "73-EIDR", "74-LGV4", "75-79PA", "76-AZLF", "77-ZQLL", "78-0RQH", "79-REJ0", "80-YXQ8", "81-PYZL", "82-TL4Q", "83-I1OH", "84-9G5F", "85-RP1N", "86-7DKL", "87-4Q2F", "88-YLBV", "89-K10F", "90-I5Q5", "91-197L", "92-SDMF", "93-DEQZ", "94-95TR", "95-5XZ7", "96-S46D", "97-2DDH", "98-EKEZ", "99-F3TN", "100-IKB6", "101-ZFWI", "102-S9EC", "103-4UST", "104-R2SM", "105-EB7W", "106-XZ7A", "107-9T6F", "108-KC92", "109-VYTZ", "110-7R4H", "111-I5WQ", "112-69XR", "113-7URN", "114-0ULV", "115-C806", "116-A04A", "117-96IQ", "118-Y736", "119-BPWQ", "120-MXQV", "121-ZRLN", "122-IVRF", "123-3EM2", "124-EPWP", "125-LS6M", "126-3P49", "127-MSK6", "128-T5HP", "129-U9P5", "130-NKEG", "131-V2DL", "132-L4IQ", "133-S6PR", "134-BQ5I", "135-9HJO", "136-AAOU", "137-D5WC", "138-X4F7", "139-TU54", "140-1SJZ", "141-MMFB", "142-CRJT", "143-BR04", "144-22GV", "145-Z4OJ", "146-K45N", "147-TYQA", "148-DPYV", "149-5AVW", "150-2RY6", "151-F1SE", "152-453A", "153-IO92", "154-QTJV", "155-Q2X7", "156-HJQ6", "157-IT12", "158-W75G", "159-AX6H", "160-9T4G", "161-5OYB", "162-W418", "163-XRR6", "164-13I1", "165-SXV4", "166-QVY3", "167-P7DW", "168-80CP", "169-80X1", "170-P64A", "171-7H0E", "172-QCKY", "173-ZL3C", "174-YNJ3", "175-SHMD", "176-R3W6", "177-Z4VR", "178-O7LA", "179-3RYC", "180-ZY6Y", "181-JMGZ", "182-LOVM", "183-I0N4", "184-PC80", "185-G76K", "186-VUIG", "187-IG92", "188-EY5D", "189-NB5F", "190-XYAD", "191-L05H", "192-V70J", "193-W0UO", "194-C39K", "195-QKUI", "196-SU81", "197-H4V1", "198-656M", "199-9DND", "200-F4VZ", "201-9RVL", "202-0U2G", "203-79VO", "204-T0SA", "205-69BZ", "206-QTO0", "207-ERS2", "208-MVYZ", "209-O7YW", "210-3DCT", "211-GGRQ", "212-IA9H", "213-NNQ0", "214-NO5T", "215-BOOG", "216-YCBP", "217-WTST", "218-5ZSO", "219-LS1J", "220-VJBG", "221-F7SM", "222-F0D4", "223-QT5S", "224-M0OJ", "225-CSZ0", "226-DZVF", "227-LIAG", "228-MY4L", "229-LZGW", "230-L7G5", "231-DNC1", "232-LPS3", "233-30BU", "234-O80H", "235-ZM37", "236-C71X", "237-QLT6", "238-EGKC", "239-NSKS", "240-YLNF", "241-ECF0", "242-T4BU", "243-6QWX", "244-QND3", "245-D668", "246-IZ3E", "247-KLZZ", "248-HDFJ", "249-7SZH", "250-SQSZ", "251-70KY", "252-61S5", "253-T4XD", "254-222I", "255-BFLM", "256-CGN4", "257-3S0F", "258-86QD", "259-0S6Q", "260-R23D", "261-5GTP", "262-59MV", "263-ENUZ", "264-WEJD", "265-QH3P", "266-G68L", "267-7BKY", "268-U12F", "269-XOKK", "270-B4R2", "271-Z21W", "272-JA4M", "273-5MEO", "274-VO8M", "275-4T0K", "276-E0YK", "277-T3IY", "278-L95V", "279-EDUO", "280-FZU9", "281-WGQ8", "282-8S73", "283-F308", "284-OZTW", "285-5D6J", "286-2A27", "287-Y9OF", "288-NAW4", "289-PHRA", "290-HRQN", "291-GID3", "292-ZK5U", "293-IVSJ", "294-V20K", "295-P3N0", "296-ZRFU", "297-I97E", "298-FXN1", "299-WYOT", "300-KOWA", "301-UTVI", "302-3M18", "303-CKV0", "304-C6LG", "305-2JBV", "306-1GS2", "307-EAJF", "308-OO7J", "309-R1FZ", "310-U4MN", "311-8PHE", "312-NST4", "313-GSG2", "314-N7VV", "315-OZNS", "316-4T45", "317-ZLRV", "318-606C", "319-MMPK", "320-WP3M", "321-2AI4", "322-Y9QO", "323-AEP1", "324-57PC", "325-FRIW", "326-Q0LE", "327-DO5L", "328-LLYL", "329-MG90", "330-FMHG", "331-AIM7", "332-0KJB", "333-LFJN", "334-FEQV", "335-SEZ7", "336-PSBL", "337-NJBO", "338-PTNZ", "339-0H4L", "340-D4IX", "341-C32E", "342-ELQ8", "343-L9R6", "344-AZIQ", "345-406I", "346-PEP5", "347-Y3HC", "348-8IUG", "349-4DT5", "350-GBSE", "351-1SPH", "352-A32I", "353-KFYD", "354-N2P4", "355-5R5J", "356-22RD", "357-FZOG", "358-LEVT", "359-P6LQ", "360-KLRI", "361-OA01", "362-OJP3", "363-LIFJ", "364-YOO9", "365-0IM1", "366-ULRG", "367-IAUP", "368-0D6M", "369-HWB9", "370-1A4T", "371-BF0A", "372-OKPU", "373-6KHM", "374-9ZLQ", "375-31PY", "376-N6X1", "377-SIMJ", "378-1LI3", "379-YA3G", "380-I93U", "381-LRPS", "382-ZENK", "383-B6MD", "384-GNIJ", "385-9P4J", "386-2N35", "387-73RL", "388-TW4S", "389-RPK2", "390-Q9Q7", "391-U2U9", "392-H8RS", "393-H677", "394-UNUC", "395-7MXI", "396-N8R2", "397-XF4J", "398-8C7D", "399-QJ6S", "400-AKGV"]

const { google } = require('googleapis');

router.get('/tickets/:id', async (req, res) => {
    if (tokens.indexOf(req.params.id) > -1) {
        id = req.params.id
        // console.log(id.split('-')[0])
        id = id.split('-')[0]
        data = ''

        const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
        const sheets = google.sheets({ version: 'v4', auth });

        const range = `Form Responses 1!A2:L500`
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range
        })

        // console.log(response.data.values)

        for (let i = 0; i < response.data.values.length; i++) {
            if (parseInt(id) == parseInt(response.data.values[i][11])) {
                // console.log(response.data.values[i])
                data = response.data.values[i]
            }
        }
        // console.log(data)

        miteIan = data[3]
        attendeeName = data[1]
        ticketType = ''
        ticketLink = ''
        try {
            ticketNo = padNumberWithZeros(data[11], 3)
        } catch (err) {
            ticketNo = ''
        }

        // check if MITEian or not
        if (miteIan == "Yes") {
            miteIan = 1
            // check for pass type
            if (data[6] == "Rs. 999 Premium Ticket") {
                ticketType = 1
                let link = require('../public/Premium.json');
                ticketLink = link['Premium_No.' + ticketNo + '.jpg']
                // console.log(ticketLink)
            } else if (data[6] == "Rs. 799 Standard Ticket") {
                ticketType = 0
                let link = require('../public/Standard.json');
                ticketLink = link['Standard_No.' + ticketNo + '.jpg']
                // console.log(ticketLink)
            }
        } else {
            miteIan = 0
            if (data[8] == "Rs. 1099 Premium Ticket") {
                ticketType = 1
                let link = require('../public/Premium.json');
                ticketLink = link['Premium_No.' + ticketNo + '.jpg']
            } else if (data[8] == "Rs. 899 Standard Ticket") {
                ticketType = 0
                let link = require('../public/Standard.json');
                ticketLink = link['Standard_No.' + ticketNo + '.jpg']
            }
        }

        // console.log(ticketLink.split('/')[5])

        if (data) {
            console.log("Accessed by " + data[1])
            res.render('tickets', { attendeeName: attendeeName, ticketType: ticketType, ticketNo: ticketNo, miteIan: miteIan, ticket_image_id: (ticketLink.split('/')[5]) })
        } else {
            res.render('invalid')
        }
    } else {
        res.render('invalid')
    }

})

router.get('/tickets', async (req, res) => {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
    const sheets = google.sheets({ version: 'v4', auth });

    const range = `Form Responses 1!A2:L500`
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range
    })

    // data = response.data.values[1]
    let numbers = []
    let users = []
    for (let i = 0; i < response.data.values.length; i++) {
        value = response.data.values[i][11]
        if (value){
            numbers.push(tokens[i-1])
            users.push(response.data.values[i][1])
        }
    }

    let urls = []
    for (let i = 0;i<numbers.length;i++){
        urls[i] = process.env.URL+numbers[i]
    }

    res.render('index', { numbers: numbers, users:users, urls: urls })
})

router.get('/check', async (req, res) => {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
    const sheets = google.sheets({ version: 'v4', auth });

    const range = `Form Responses 1!A2:L500`
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range
    })

    let numbers = []
    for (let i = 0; i < response.data.values.length; i++) {
        value = response.data.values[i][11]
        if (value)
            numbers.push(value)
    }

    const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
    // console.log(duplicates);

    let message = ''
    if (duplicates.length != 0) {
        message = "Duplicates found: " + duplicates.toString()
    } else {
        message = "All OK"
    }

    // console.log(response.data.values)
    res.render('check', { message: message })
})

router.get('/status', async (req, res) => {

    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });
    const sheets = google.sheets({ version: 'v4', auth });

    const range = `Form Responses 1!A2:L500`
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range
    })

    // console.log(response.data.values)

    let Premium = 0
    let Standard = 0
    let Total = 0
    let count = 0
    for (let i = 0; i < response.data.values.length; i++) {
        if (response.data.values[i][1]) {
            count++
            // console.log(response.data.values[i][1])
        }
        if (response.data.values[i][3] == "Yes") {
            if (response.data.values[i][6] == "Rs. 999 Premium Ticket" && response.data.values[i][0] != "complimentary ") {
                Premium = Premium + 1
                Total = Total + 999
            } else if (response.data.values[i][6] == "Rs. 799 Standard Ticket" && response.data.values[i][0] != "complimentary ") {
                Standard = Standard + 1
                Total = Total + 799
            }
        } else {
            if (response.data.values[i][8] == "Rs. 1099 Premium Ticket" && response.data.values[i][0] != "complimentary ") {
                Premium = Premium + 1
                Total = Total + 1099
            } else if (response.data.values[i][8] == "Rs. 1099 Premium Ticket" && response.data.values[i][0] != "complimentary ") {
                Standard = Standard + 1
                Total = Total + 899
            }
        }

    }
    console.log("Status page accessed")

    // test
    res.render('status', { premium: Premium, standard: Standard, tickets: (Premium + Standard), total: Total, count: count })
})

module.exports = router;