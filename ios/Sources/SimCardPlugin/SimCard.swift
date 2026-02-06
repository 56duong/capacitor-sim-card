import Foundation

@objc public class SimCard: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
