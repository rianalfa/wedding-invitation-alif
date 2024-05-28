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
        const result = await excuteQuery({
            query: 'SELECT * FROM `messages`'
        });

        return NextResponse.json({data: JSON.stringify(result)}, {
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
        const result = await excuteQuery({
            query: 'INSERT INTO `messages` (`name`,`message`) VALUES (?,?)',
            values: [res.name, res.message],
        });
        
        if (result.affectedRows >= 1) {
            return NextResponse.json({msg: "Pesan berhasil dikirim"}, {
                status: 200,
            });
        } else {
            throw "Pesan gagal dikirim";
        }
    } catch ( error ) {
        return NextResponse.json({msg: error}, {
            status: 500,
        });
    }
}