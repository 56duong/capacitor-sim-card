// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorSimCard",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorSimCard",
            targets: ["SimCardPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "SimCardPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/SimCardPlugin"),
        .testTarget(
            name: "SimCardPluginTests",
            dependencies: ["SimCardPlugin"],
            path: "ios/Tests/SimCardPluginTests")
    ]
)