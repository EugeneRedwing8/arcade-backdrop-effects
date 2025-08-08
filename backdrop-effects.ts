namespace effects{
        //% fixedInstance whenUsed block="rain"
        export const rain = new ScreenEffect(0, 750, 0, function (anchor: particles.ParticleAnchor, particlesPerSecond: number){
            const factory = new particles.RainFactory(160);
            const source = new particles.ParticleSource(anchor, particlesPerSecond, factory);
            factory.setDirection(360, 0);
            factory.setSpeed(200);
            // render behind tile map
            source.z = 4;
            return source
        });

    //% fixedInstance whenUsed block="storm"
    export const storm = new ScreenEffect(.5, 1.5, 5000, function (anchor: particles.ParticleAnchor, particlesPerSecond: number) {
        const factory = new particles.StormFactory();
        const source = new particles.ParticleSource(anchor, particlesPerSecond, factory);

        // render behind tile map
        source.z = 6;
        return source;
    });
    //% fixedInstance whenUsed block="lightning"
    export const lightning = new ScreenEffect(10, 1, 4000, function (anchor: particles.ParticleAnchor, particlesPerSecond: number) {
        const factory = new particles.LightningFactory(anchor.width ? anchor.width : 16, 16);
        const source = new particles.ParticleSource(anchor, particlesPerSecond, factory);
        factory.setSpeed(30);
        source.z = -3
        return source;
    });
    //% fixedInstance whenUsed block="ash"
    export const ash = new ScreenEffect(0, 7500, 0, function (anchor: particles.ParticleAnchor, particlesPerSecond: number) {
        const factory = new particles.AshParticleFactory(160);
        const source = new particles.ParticleSource(anchor, particlesPerSecond, factory);
        factory.setDirection(randint(0, 360), randint(0, 360));
        factory.setSpeed(25);
        // render behind tile map
        source.z = 4;
        return source
    });
}