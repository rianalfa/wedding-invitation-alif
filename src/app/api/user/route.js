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
        const slug = searchParams.get('user');

        const result = await excuteQuery({
            query: 'SELECT * FROM `users` WHERE `users`.`slug` = ?',
            values: [slug],
        });

        return NextResponse.json({data: JSON.stringify(result[0])}, {
            status: 200,
        });
    } catch ( error ) {
        return NextResponse.json({msg: JSON.stringify(error)}, {
            status: 500,
        });
    }
}