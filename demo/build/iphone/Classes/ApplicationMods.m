#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"linea",@"name",@"linea",@"moduleid",@"0.1",@"version",@"273c5a0b-944b-4bf2-8721-21cfc05267d5",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
