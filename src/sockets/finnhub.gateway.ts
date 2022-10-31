import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
} from '@nestjs/websockets';
import { WebSocket } from 'ws';

@WebSocketGateway()
export class FinnhubsGateway implements OnGatewayInit {
  afterInit() {
    console.log('socket init');
    const socket = new WebSocket(
      'wss://ws.finnhub.io?token=cceqv72ad3i6bee15r40',
    );

    socket.addEventListener('open', function (event) {
      socket.send(
        JSON.stringify({ type: 'subscribe', symbol: 'BINANCE:BTCUSDT' }),
      );
    });

    // socket.addEventListener('message', function (event) {
    //   const data = JSON.parse(event.data).data;
    //   if (Array.isArray(data)) {
    //     if (data.length !== 0) {
    //       data.forEach((el) => {
    //         let { p: price, s: symbol, t: timestamp_unix, v: volume } = el;
    //         console.log(symbol, price, volume, timestamp_unix);
    //       });
    //     }
    //   }
    // });

    // // Unsubscribe
    // var unsubscribe = function (symbol) {
    //   socket.send(JSON.stringify({ type: 'unsubscribe', symbol: symbol }));
    // };
  }
}

/* 
Message from server  {"data":[{"c":null,"p":20461.12,"s":"BINANCE:BTCUSDT","t":1667198366116,"v":0.06164},{"c":null,"p":20461.12,"s":"BINANCE:BTCUSDT","t":1667198366116,"v":0.07517},{"c":null,"p":20461.12,"s":"BINANCE:BTCUSDT","t":1667198366116,"v":0.06769},{"c":null,"p":20461.11,"s":"BINANCE:BTCUSDT","t":1667198366116,"v":0.33782},{"c":null,"p":20461.11,"s":"BINANCE:BTCUSDT","t":1667198366126,"v":0.02},{"c":null,"p":20461.11,"s":"BINANCE:BTCUSDT","t":1667198366129,"v":0.1567},{"c":null,"p":20461.31,"s":"BINANCE:BTCUSDT","t":1667198366130,"v":0.00446},{"c":null,"p":20461.66,"s":"BINANCE:BTCUSDT","t":1667198366130,"v":0.02428},{"c":null,"p":20461.1,"s":"BINANCE:BTCUSDT","t":1667198366131,"v":0.0007},{"c":null,"p":20461.08,"s":"BINANCE:BTCUSDT","t":1667198366131,"v":0.0011}],"type":"trade"}
*/
