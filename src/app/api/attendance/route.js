import { NextResponse } from "next/server";
import excuteQuery from "../../../../lib/db";

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'alifnindah'
});

connection.connect();

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        const result = await excuteQuery({
            query: 'SELECT * FROM `attendances` WHERE `attendances`.`user_id` = ?',
            values: [userId],
        });

        return NextResponse.json({data: JSON.stringify(result[0])}, {
            status: 200,
        });
    } catch ( error ) {
        return NextResponse.json({msg: error}, {
            status: 500,
        });
    }
}

export async function POST(req) {
    try {
        const res = await req.json();
        console.log(res.attendance);
        const result = await excuteQuery({
            query: 'REPLACE INTO `attendances` VALUES (?,?,?)',
            values: [res.userId, res.attendance, res.numberOfPeople],
        });
        
        if (result.affectedRows >= 1) {
            return NextResponse.json({msg: "Berhasil menyimpan kehadiran"}, {
                status: 200,
            });
        } else {
            throw "Gagal menyimpan kehadiran";
        }
    } catch ( error ) {
        return NextResponse.json({msg: error}, {
            status: 500,
        });
    }
}