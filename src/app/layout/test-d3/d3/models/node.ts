import APP_CONFIG from '../../app.config';
const $ = require('jquery');
let cur_pos = 0;
export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: number;
  ip: string;
  group?: number;
  mx?: number;
  my?: number;
  linkCount: number = 0;

  constructor(_ip, _group) {
    this.ip = _ip;
    this.id = 0;
    this.group = _group ? _group : 'None';
    this.x = cur_pos + 100;
    this.y = cur_pos + 100;
    cur_pos += 100;
    if (_group) {
      console.log(_group);
      this.vx = this.mx = $('#'+ _group).offset().left + 2*(_group*20) + 20;
      this.vy = this.my = $('#'+ _group).offset().top + 2*(_group*20) + 30; //(groups[val.group]*20 === NaN ? 0 : groups[val.group]*20)
      $('#' + _group).css('background-color', '#a7f1a7');
    }
//       da['mode'] = ( typeof nodes[key]['mode'] ===  'undefined' ? 'None' : nodes[key]['mode'])
//       da['channel'] = ( typeof nodes[key]['channel'] ===  'undefined' ? 'None' : nodes[key]['channel'])
//       da['tx_power'] = ( typeof nodes[key]['tx_power'] ===  'undefined' ? 'None' : nodes[key]['tx_power'])
//       da['link_quality'] = ( typeof nodes[key]['link_quality'] ===  'undefined' ? 'None' : nodes[key]['link_quality'])
//       da['signal'] = ( typeof nodes[key]['signal'] ===  'undefined' ? 'None' : nodes[key]['signal'])
//       da['noise'] = ( typeof nodes[key]['noise'] ===  'undefined' ? 'None' : nodes[key]['noise'])
//       da['bit_rate'] = ( typeof nodes[key]['bit_rate'] ===  'undefined' ? 'None' : nodes[key]['bit_rate'])
//       da['hw_addr'] = ( typeof nodes[key]['hw_addr'] ===  'undefined' ? 'None' : nodes[key]['hw_addr'])
//       da['mod'] = ( typeof nodes[key]['mod'] ===  'undefined' ? 'None' : nodes[key]['mod'])
//       da['frequency'] = ( typeof nodes[key]['frequency'] ===  'undefined' ? 'None' : nodes[key]['frequency'])
//       da['tp'] = ( typeof nodes[key]['tp'] ===  'undefined' ? 'None' : nodes[key]['tp'])
  }

  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  }

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px';
  }

  get color() {
    let index = Math.floor(APP_CONFIG.SPECTRUM.length * this.normal());
    return APP_CONFIG.SPECTRUM[index];
  }
}
