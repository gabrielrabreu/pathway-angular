export class Utils {
    private static valueOrDefault(value: any, defaultValue: any): any {
        return typeof value === 'undefined' ? defaultValue : value;
    }

    private static MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    private static COUNTRIES = [
        'Germany',
        'Brazil',
        'France',
        'Portugal',
        'Argentina',
        'United States',
        'Chile',
        'Egito',
        'Senegal'
    ];

    private static COLORS = [
        'rgb(255, 99, 132)', // RED,
        'rgb(255, 159, 64)', // ORANGE,
        'rgb(50, 205, 50)', // GREEN,
        'rgb(54, 162, 235)', // BLUE,
        'rgb(153, 102, 255)', // PURPLE,
        'rgb(255, 205, 86)', // YELLOW,
        'rgb(201, 203, 207)' // GRAY
    ];

    public static months(config: any): string[] {
        var cfg = this.valueOrDefault(config, {});
        var count = this.valueOrDefault(cfg.count, 12);
        var values = [];
      
        for (let i = 0; i < count; ++i) {
          values.push(this.MONTHS[i]);
        }
      
        return values;
    }

    public static countries(config: any): string[] {
        var cfg = this.valueOrDefault(config, {});
        var count = this.valueOrDefault(cfg.count, 3);
        var values = [];
      
        for (let i = 0; i < count; ++i) {
          values.push(this.COUNTRIES[i]);
        }
      
        return values;
    }

    public static colors(config: any): string[] {
        var cfg = config || {};
        var count = cfg.count || 3;
        var values = [];
      
        for (let i = 0; i < count; ++i) {
          values.push(this.COLORS[i]);
        }
      
        return values;
    }
    
    public static number(config: any): number {
        const cfg = config || {};
        const min = this.valueOrDefault(cfg.min, 0);
        const max = this.valueOrDefault(cfg.max, 100);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}